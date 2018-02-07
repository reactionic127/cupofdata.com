import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from '../components/Layout'
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
  padding-bottom: 30px;
`
const MemberTitle = styled.div`
  font-size: 24px;
  color: #ffffff;
  line-height: 28px;
  margin-bottom: 40px;
`
const Card = Col.extend`
  text-align: center;
  margin-bottom: 50px;
`
const Fullname = styled.h3`
  font-size: 18px;
  line-height: 25px;
  margin-top: 15px;
`
const Photo = styled.img`
  border: 2px #35a73e solid;
  border-radius: 3px;
  font-family: Avenir;
`
const Position = styled.h4`
  font-size: 16px;
  line-height: 22px;
  font-family: Avenir;
  margin-top: 10px;
`
export default function Template ({ data }) {
  const { markdownRemark: post } = data
  console.log('-- markdownRemark --\n', post)
  return (
    <Fragment>
      <Helmet title={`About Us | ${data.site.siteMetadata.title}`} />
      <MainSection>
        <Container>
          <Topic>{post.frontmatter.title}</Topic>
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </MainSection>
      {post.frontmatter.members && <MemberSection>
        <MemberTitle>OUR TEAM</MemberTitle>
        <Row>
          {post.frontmatter.members.map((member, i) => (
            <Card sm="4" key={i} >
              <Photo src={member.photo} width="225"></Photo>
              <Fullname>{member.fullname}</Fullname>
              <Position>{member.position}</Position>
            </Card>
          ))}
        </Row>
      </MemberSection>
      }
    </Fragment>
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
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
