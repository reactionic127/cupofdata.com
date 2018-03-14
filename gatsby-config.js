const injectSegment = () => {
  const { SEGMENT_PROD_WRITE_KEY, SEGMENT_DEV_WRITE_KEY } = process.env
  if (!SEGMENT_PROD_WRITE_KEY && !SEGMENT_DEV_WRITE_KEY) return
  return {
    resolve: `gatsby-plugin-segment-js`,
    options: {
      // When running `gatsby build`
      prodKey: `${SEGMENT_PROD_WRITE_KEY || SEGMENT_DEV_WRITE_KEY}`,
      // When running `gatsby develop`
      devKey: `${SEGMENT_DEV_WRITE_KEY}`,
      trackPage: true,
    },
  }
}

module.exports = {
  siteMetadata: {
    title: 'Cup of Data',
    author: 'Cup of Data Team',
    authorLink: 'https://github.com/cupofdata',
    disqus: 'cup-of-data-blog',
  },
  plugins: [
    {
      resolve: '@raygesualdo/gatsby-plugin-settings',
      options: {
        path: `${__dirname}/settings`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs', 'gatsby-remark-copy-linked-files'],
      },
    },
    injectSegment(),
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './content/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-cms',
  ].filter(Boolean),
}
