import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import { Container } from '../components/Layout'
import { H1 } from '../components/Typography'

const Wrapper = styled.div`
  padding: 90px 0;
  background: #f7f5fa;
  text-align: center;
`

const Title = H1.extend`
  margin-top: 91px;
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

Template.propTypes = {
  data: PropTypes.object,
}

export const TestimoinalQuery = graphql`
  query testimoinal($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
