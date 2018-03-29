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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/files/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs', 'gatsby-remark-copy-linked-files'],
      },
    },
    {
      resolve: 'gatsby-plugin-segment',
      options: {
        writeKey: `${process.env.SEGMENT_PROD_WRITE_KEY}`,
      },
    },
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
    'gatsby-plugin-babel-styled-components',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-sharp',
  ].filter(Boolean),
}
