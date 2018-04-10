const path = require('path')
const _ = require('lodash')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              contentType
              path
              date
              title
              tags {
                name
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const tagPage = path.resolve('src/templates/tag.js')
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.contentType)}.js`
        ),
        context: {}, // additional data can be passed via context
      })
    })
    const tagSet = new Set()
    result.data.allMarkdownRemark.edges.forEach(edge => {
      if (edge.node.frontmatter.tags) {
        edge.node.frontmatter.tags.forEach(tag => {
          tagSet.add(tag.name)
        })
      }
    })
    const tagList = Array.from(tagSet)
    tagList.forEach(tag => {
      createPage({
        path: `/blog/tags/${_.kebabCase(tag)}/`,
        component: tagPage,
        context: {
          tag,
        },
      })
    })
  })
}
