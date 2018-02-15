import React, { Fragment } from 'react'
import graphql from 'graphql'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import BannerSection from '../containers/Home/BannerSection'
import FeaturesWrapper from '../containers/Home/Features'
import NewsWrapper from '../containers/Home/News'
import BenefitsWrapper from '../containers/Home/Benefits'
import TestimonialsWrapper from '../containers/Home/Testimonials'
import AutomatedMarketingWrapper from '../containers/Home/AutomatedMarketing'

const IndexPage = ({data}) => (
  <div>
    <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
    <BannerSection />
    <FeaturesWrapper />
    <BenefitsWrapper />
    <NewsWrapper data={data.allMarkdownRemark.edges}/>
    <TestimonialsWrapper />
    <AutomatedMarketingWrapper />
  </div>
)

export default IndexPage
export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        frontmatter{
          title
          contentType
          date(formatString: "MMMM DD, YYYY")
          path
          summary
        }
      }
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}`

