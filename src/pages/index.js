import React, { Fragment } from 'react'
import graphql from 'graphql'
import styled from 'styled-components'
import BannerSection from '../containers/BannerSection'
import FeaturesWrapper from '../containers/Features'
import NewsWrapper from '../containers/News'
import BenefitsWrapper from '../containers/Benefits'
import FeedbackWrapper from '../containers/Feedback'
import AutomatedMarketingWrapper from '../containers/AutomatedMarketing'

const IndexPage = (props) => (
  <Fragment>
    <BannerSection />
    <FeaturesWrapper />
    <BenefitsWrapper />
    <NewsWrapper />
    <FeedbackWrapper />
    <AutomatedMarketingWrapper />
  </Fragment>
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
