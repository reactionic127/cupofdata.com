import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Container, Row, Col } from '../components/Layout'
import { H1, H5, H6, P } from '../components/Typography'
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

const Content = H5.extend`
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

const Card = Col.extend`
  text-align: center;
  margin-bottom: 50px;
`

const Fullname = H6.extend`
  margin-top: 15px;
  font-weight: 500;
  white-space: nowrap;
`

const Position = P.extend`
  font-family: Avenir;
  margin-top: 10px;
  font-weight: 400;
`

const photoStyle = {
  objectFit: 'cover',
  borderRadius: '50%',
}

export default function Template({ data }) {
  const { markdownRemark: post, allFile } = data
  let imagesArray = []
  allFile.edges.map(({ node: file }) => imagesArray.push(file))
  return (
    <div>
      <Helmet title={`About Us | ${data.site.siteMetadata.title}`} />
      <MainSection>
        <Container>
          <Topic>{post.frontmatter.title}</Topic>
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </MainSection>
      {post.frontmatter.members && (
        <MemberSection>
          <Row>
            {post.frontmatter.members.map((member, i) => (
              <Card xs="12" sm="6" md="2" key={i}>
                {imagesArray
                  .filter(item => item.relativePath === member.photo.slice(14))
                  .map((item, i) => (
                    <Img
                      key={i}
                      resolutions={item.childImageSharp.resolutions}
                      imgStyle={photoStyle}
                    />
                  ))}
                <Fullname>{member.fullname}</Fullname>
                <Position>{member.position}</Position>
              </Card>
            ))}
          </Row>
        </MemberSection>
      )}
    </div>
  )
}

Template.propTypes = {
  data: PropTypes.object,
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
    allFile(filter: { absolutePath: { regex: "/images/" } }) {
      edges {
        node {
          absolutePath
          relativePath
          childImageSharp {
            resolutions(width: 105, height: 105) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`
