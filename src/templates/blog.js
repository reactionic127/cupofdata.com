import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Card,
  CardTitle,
  CardGroup,
  CardBody,
} from '../components/Layout'
import graphql from 'graphql'
import Link from 'gatsby-link'

// find a post title by path
const findNode = (path, data) =>
  data.allMarkdownRemark.edges
    .map(edge => edge.node.frontmatter)
    .filter(r => r.path === path)
    .pop()

const BlogContainer = Container.extend`
  padding: 3rem 1.5rem;
  padding-top: calc(3rem + 94px);
  h2 {
    margin: 0.7rem 0;
  }
  p {
    margin: 1rem 0;
  }
`

export default function Template({ data }) {
  const { markdownRemark: post } = data
  const related = post.frontmatter.related
    ? post.frontmatter.related.map(r => findNode(r.post, data))
    : []
  return (
    <div>
      <BlogContainer dangerouslySetInnerHTML={{ __html: post.html }} />
      {post.frontmatter.related && (
        <Container>
          <h4>Related</h4>
          <CardGroup>
            {related.map((r, i) => (
              <Card key={i}>
                <CardBody>
                  <CardTitle>
                    <Link to={r.path}>{r.title}</Link>
                  </CardTitle>
                </CardBody>
              </Card>
            ))}
          </CardGroup>
        </Container>
      )}
    </div>
  )
}

Template.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        author
        postimage
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            contentType
            title
            path
            postimage
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
