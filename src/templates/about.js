import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from '../components/Layout'
import { H1, H4, H5, P, Title } from '../components/Typography'
import { CardGroup } from '../containers/About'
import Helmet from 'react-helmet'
import graphql from 'graphql'

const MainSection = styled.div`
  display: block;
  position: relative;
  padding-top: 94px;
  height: fit-content;
`

const Topic = H1.extend`
  margin-top: 3rem;
  text-align: left;
  @media screen and (max-width: 576px) {
    margin-top: 3rem;
  }
`

const Content = Title.extend`
  max-width: 680px;
  margin-top: 2rem;
  margin-bottom: 3.5rem;
  p {
    font-size: 18px;
    line-height: 30px;
    font-family: Avenir;
    font-weight: 400;
  }
`

const MemberSection = Container.extend`
  margin-bottom: 30px;
`

const MemberTitle = H4.extend`
  font-family: GTWalsheim;
  margin-bottom: 40px;
`

const Card = Col.extend`
  text-align: center;
  margin-bottom: 50px;
`

const Fullname = H5.extend`
  margin-top: 15px;
  font-weight: 500;
  white-space: nowrap;
`

const Photo = styled.img`
  font-family: Avenir;
  object-position: 50% 0%;
  object-fit: cover;
  border-radius: 50%;
`

const Position = P.extend`
  font-family: Avenir;
  margin-top: 10px;
  font-weight: 400;
`

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    <div>
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
            <Card xs="12" sm="6" md="2" key={i} >
              <Photo src={member.photo} width="105" height="105"></Photo>
              <Fullname>{member.fullname}</Fullname>
              <Position>{member.position}</Position>
            </Card>
          ))}
        </Row>
      </MemberSection>
      }
    </div>
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
