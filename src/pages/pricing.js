import React from 'react'
import Helmet from 'react-helmet'
import PriceSection from '../components/Pricing/PriceSection'
import FAQSection from '../components/Pricing/FAQ'

const Pricing = ({ data }) => {
  const { allMarkdownRemark: post } = data
  const faqs = post.edges.filter(
    item => item.node.frontmatter.contentType === 'faq'
  )
  return (
    <div>
      <Helmet title={`Pricing | ${data.site.siteMetadata.title}`} />
      <PriceSection />
      <FAQSection faqs={faqs} />
    </div>
  )
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
            title
            contentType
          }
        }
      }
    }
  }
`
