import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import { Container } from '../components/Layout'
import { H1, H6 } from '../components/Typography'

const Wrapper = styled.div`
  padding: 90px 0;
  background: #f7f5fa;
  text-align: center;
`

const Title = H1.extend`
  margin-top: 91px;
`

const Description = H6.extend`
  margin: 10px auto;
  font-weight: 400;
`

const ContentWrapper = styled.div`
  padding: 50px 0;
`

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <div>
      <Helmet
        title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`}
      />
      <Wrapper>
        <Container>
          <Title>{post.frontmatter.title}</Title>
        </Container>
      </Wrapper>
    </div>
  )
}

export const FeatureQuery = graphql`
  query feature($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        description
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
