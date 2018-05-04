import React from 'react'
import graphql from 'graphql'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 85px;
  padding-bottom: 130px;
  background-color: ${props => props.theme.price.color.background};
  color: ${({ theme }) => theme.price.color.text};
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
        title
        note
        announcement
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
