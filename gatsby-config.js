module.exports = {
  siteMetadata: {
    title: 'Cup of Data',
    author: 'Cup of Data Team',
    authorLink: 'https://github.com/cupofdata',
    disqus: 'cup-of-data-blog'// put your disqus ID here
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
    {
        resolve: `gatsby-plugin-segment-js`,
        options: {
            // your segment write key for your production environment
            // when process.env.NODE_ENV === 'production'
            // required; non-empty string
            prodKey: `${process.env.SEGMENT_PROD_WRITE_KEY}`,

            // if you have a development env for your segment account, paste that key here
            // when process.env.NODE_ENV === 'development'
            // optional; non-empty string
            devKey: `${process.env.SEGMENT_DEV_WRITE_KEY}`,

            // whether you want to include analytics.page()
            // optional; boolean that defaults to true
            // if false, then don't forget to manually add it to your codebase manually!
            trackPage: true
        }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components'
  ]
}
