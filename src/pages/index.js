import React, { Fragment } from 'react'
import graphql from 'graphql'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import BannerSection from '../components/Home/BannerSection'
import FeaturesWrapper from '../components/Home/Features'
import NewsWrapper from '../components/Home/News'
import BenefitsWrapper from '../components/Home/Benefits'
import TestimonialsWrapper from '../components/Home/Testimonials'
import AutomatedMarketingWrapper from '../components/Home/AutomatedMarketing'

const IndexPage = ({ data }) => (
  <div>
    <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
    <BannerSection />
    <FeaturesWrapper />
    <BenefitsWrapper />
    <NewsWrapper data={data.allMarkdownRemark.edges} />
    <TestimonialsWrapper data={data.allMarkdownRemark.edges} />
    <AutomatedMarketingWrapper />
  </div>
)

export default IndexPage
export const pageQuery = graphql`
  query IndexQuery {
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
            summary
            newsFlag
            postimage
            position
            comment
            photo
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
