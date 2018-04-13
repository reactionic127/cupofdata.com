import React from 'react'
import styled from 'styled-components'
import Link, { withPrefix } from 'gatsby-link'

const Wrapper = styled.div`
  padding-top: 85px;
  padding-bottom: 130px;
  background-color: ${props => props.theme.contact.color.background};
  color: ${({ theme }) => theme.contact.color.text};
  @media screen and (max-width: 576px) {
    padding: 3rem 0;
  }
`

const Pricing = () => <Wrapper>Price</Wrapper>

export default Pricing

export const PricingQuery = graphql`
  query price($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        mission
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
