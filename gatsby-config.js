module.exports = {
  siteMetadata: {
    title: 'Cup of Data',
    author: 'Goolzzi',
    authorLink: 'https://github.com/konsumer',
    disqus: 'gatsby-cup-of-data-blog'// put your disqus ID here
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8
      }
    },
    'gatsby-plugin-styled-components'
  ]
}
