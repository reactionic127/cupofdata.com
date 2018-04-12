import React, { Fragment } from 'react'
import graphql from 'graphql'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import BannerSection from '../components/Home/BannerSection'
import HowItWorks from '../components/Home/HowItWorks'
import Features from '../components/Home/Features'
import News from '../components/Home/News'
import Benefits from '../components/Home/Benefits'
import Testimonials from '../components/Home/Testimonials'
import Contact from '../components/Contact'
import AutomatedMarketing from '../components/Home/AutomatedMarketing'

const IndexPage = ({ data }) => (
  <div>
    <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
    <BannerSection data={data.allMarkdownRemark.edges} />
    <HowItWorks />
    <Features data={data.allMarkdownRemark.edges} />
    <Benefits />
    <News data={data.allMarkdownRemark.edges} />
    <Testimonials data={data.allMarkdownRemark.edges} />
    <Contact data={data.allMarkdownRemark.edges} />
    <AutomatedMarketing />
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
