import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Helmet from 'react-helmet'
import PriceSection from '../components/Pricing/PriceSection'
import FAQSection from '../components/Pricing/FAQ'

const Pricing = ({ data }) => {
  const { allMarkdownRemark: post } = data
  const prices = post.edges.filter(
    item => item.node.frontmatter.contentType === 'pricing'
  )
  const faqs = post.edges.filter(
    item => item.node.frontmatter.contentType === 'faq'
  )
  return (
    <div>
      <Helmet title={`Pricing | ${data.site.siteMetadata.title}`} />
      <PriceSection priceInfo={prices[0].node.frontmatter} />
      <FAQSection faqs={faqs} />
    </div>
  )
}

Pricing.propTypes = {
  data: PropTypes.object,
}

export default Pricing

export const Price = graphql`
  query PriceQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: [fileAbsolutePath] }) {
      edges {
        node {
          fileAbsolutePath
          html
          frontmatter {
            contentType
            title
            note
            announcement
          }
        }
      }
    }
  }
`
