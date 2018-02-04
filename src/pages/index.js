import React from 'react'
import graphql from 'graphql'
import BannerSection from '../containers/BannerSection'
import FeaturesWrapper from '../containers/Features'
import NewsWrapper from '../containers/News'
import BenefitsWrapper from '../containers/Benefits'
import FeedbackWrapper from '../containers/Feedback'
import AutomatedMarketingWrapper from '../containers/AutomatedMarketing'
import NavContainer from '../components/Navbar'

const IndexPage = (props) => (
  <div>
    <BannerSection />
    <FeaturesWrapper />
    <BenefitsWrapper />
    <NewsWrapper />
    <FeedbackWrapper />
    <AutomatedMarketingWrapper />
  </div>
)

export default IndexPage
export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark(sort: {
    order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }`
