import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Global'
import { PageTitle, Title } from '../components/Typography'
import { CardGroup } from '../containers/About'
import Helmet from 'react-helmet'
import graphql from 'graphql'

const MainSection = styled.div`
  display: block;
  position: relative;
  padding-top: 94px;
  height: fit-content;
  ::before {
    content: '';
    opacity: 0.4;
    z-index: -1;
    background: url(/files/images/bk-about.png);
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  ::after {
    content: '';
    z-index: -1;
    background: linear-gradient(to right, #495CF2, rgba(36, 56, 214, 0.9)); 
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
const Topic = PageTitle.extend`
  margin-top: 5rem;
  text-align: left;
`
const Content = Title.extend`
  color: #ffffff;
  max-width: 680px;
  margin-top: 2rem;
  margin-bottom: 235px;
`
const MemberSection = Container.extend`
  margin-top: -175px;
`

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  console.log('-- markdownRemark --\n', post)
  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />
      <MainSection>
        <Container>
          <Topic>{post.frontmatter.title}</Topic>
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </MainSection>
      {post.frontmatter.members && <Container>
        <h3>OUR TEAM</h3>
        <CardGroup>
          {post.frontmatter.members.map((member, i) => (
            <div key={i}>
              <img src={member.photo}></img>
              <h3>{member.fullname}</h3>
              <h4>{member.position}</h4>
            </div>
          ))}
        </CardGroup>
      </Container>
      }
    </div>
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        members {
          photo
          fullname
          position
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
