import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Helmet from 'react-helmet'
import BannerSection from '../components/Features/BannerSection'
import FeaturesTitle from '../components/Features/FeaturesTitle'
import FeaturesOne from '../components/Features/FeaturesOne'
import FeaturesTwo from '../components/Features/FeaturesTwo'
import FeaturesThree from '../components/Features/FeaturesThree'
import AutomatedMarketing from '../components/Home/AutomatedMarketing'

const FeaturesPage = ({ data }) => {
  return (
    <div>
      <Helmet title={`Features | ${data.site.siteMetadata.title}`} />
      <BannerSection />
      <FeaturesTitle />
      <FeaturesOne data={data} />
      <FeaturesTwo />
      <FeaturesThree />
      <AutomatedMarketing data={data.allMarkdownRemark.edges} />
    </div>
  )
}

FeaturesPage.propTypes = {
  data: PropTypes.object,
}

export default FeaturesPage

export const pageQuery = graphql`
  query FeaturesQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
            description
            summary
            newsFlag
            postimage
            position
            comment
            photo
            button
            header
            personName
            personRole
            mission
            content
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: { absolutePath: { regex: "/images/" } }) {
      edges {
        node {
          absolutePath
          relativePath
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
