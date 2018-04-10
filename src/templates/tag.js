import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Container } from '../components/Layout'
import BlogCard from '../components/BlogCard'

const MainSection = styled.div`
  padding-top: 94px;
  height: fit-content;
`

const TagTemplate = ({ data, pathContext }) => {
  const tag = pathContext.tag
  const postEdges =
    (data.allMarkdownRemark && data.allMarkdownRemark.edges) || []
  return (
    <div>
      <Helmet title={`Tagged in ${tag}`} />
      <MainSection>
        <Container>
          {postEdges.map(({ node: post }, i) => (
            <BlogCard key={i} post={post} />
          ))}
        </Container>
      </MainSection>
    </div>
  )
}
export default TagTemplate

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [{ name: { eq: $tag } }] } } }
    ) {
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
            tags {
              name
            }
          }
        }
      }
    }
  }
`
