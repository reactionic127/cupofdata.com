import React from 'react'
import graphql from 'graphql'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 85px;
  padding-bottom: 130px;
  @media screen and (max-width: 576px) {
    padding: 3rem 0;
  }
`

const AutomatedMarketing = () => <Wrapper>AutomatedMarketing</Wrapper>

export default AutomatedMarketing

export const AutomatedMarketingQuery = graphql`
  query automatedMarketing($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        content
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
