import React from 'react'
import graphql from 'graphql'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 85px;
  padding-bottom: 130px;
  background-color: ${props => props.theme.contact.color.background};
  color: ${({ theme }) => theme.contact.color.text};
  @media screen and (max-width: 576px) {
    padding: 3rem 0;
  }
`

const Contact = () => <Wrapper>MISSION</Wrapper>

export default Contact

export const ContactQuery = graphql`
  query contact($path: String!) {
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
