import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import _ from 'lodash'
import { Container, Row, Col } from '../components/Layout'
import BlogCard from '../components/BlogCard'
import Button from '../components/Button'

const MainSection = styled.div`
  padding-top: 94px;
  height: fit-content;
`

const LoadBtn = Button.extend`
  display: block;
  margin: 50px auto 73px;
  background: black;
`

const BlogMaster = ({ data }) => {
  const { allMarkdownRemark: post } = data
  const blog = post.edges.filter(
    post => post.node.frontmatter.contentType === 'blog'
  )
  return (
    <div>
      <Helmet title={`Blog | ${data.site.siteMetadata.title}`} />
      <MainSection>
        {blog && (
          <Container>
            {blog.map(({ node: post }, i) => <BlogCard key={i} post={post} />)}
            <LoadBtn outline>Load more</LoadBtn>
          </Container>
        )}
      </MainSection>
    </div>
  )
}
export default BlogMaster

export const blogMasterQuery = graphql`
  query BlogMaster {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
            summary
            author
            postimage
            tags
          }
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
