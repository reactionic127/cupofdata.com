const fs = require('fs')
const { basename } = require('path')
const crypto = require('crypto')
const glob = require('glob')
const yaml = require('js-yaml')
const chokidar = require('chokidar')
const set = require('lodash/set')
const throttle = require('lodash/throttle')

const YAML_GLOB = '*.@(yml|yaml)'
const getKey = file => basename(file).split('.')[0]
const getData = file => yaml.safeLoad(fs.readFileSync(file, 'utf-8'))
const getSettings = ({ path }) =>
  glob
    .sync(`${path}/${YAML_GLOB}`)
    .reduce((obj, file) => set(obj, getKey(file), getData(file)), {})
const handleCreateNode = ({ createNode, path }) => {
  const settings = getSettings({ path })
  createNode({
    ...settings,
    id: 'SiteSettings',
    parent: 'Site',
    children: [],
    internal: {
      type: 'SiteSettings',
      contentDigest: crypto
        .createHash('md5')
        .update(JSON.stringify(settings))
        .digest('hex'),
    },
  })
}
// Adapted from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-filesystem/src/gatsby-node.js
const watchSettingsFiles = ({ boundActionCreators, reporter }, { path }) => {
  if (!path) {
    throw new Error('options.path must be specified .')
  }
  if (!fs.existsSync(path)) {
    throw new Error('options.path must exist.')
  }

  const { createNode } = boundActionCreators
  const createSettingsNode = throttle(
    () => handleCreateNode({ createNode, path }),
    1000
  )
  const watcher = chokidar.watch(`${path}/${YAML_GLOB}`)
  watcher.on(`add`, createSettingsNode)
  watcher.on(`change`, createSettingsNode)
  watcher.on(`unlink`, createSettingsNode)

  return new Promise((resolve, reject) => {
    watcher.on(`ready`, () => {
      createSettingsNode()
      resolve()
    })
  })
}

exports.sourceNodes = watchSettingsFiles
