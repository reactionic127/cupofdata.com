import React, { Component } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Container } from '../components/Layout'
import BlogCard from '../components/BlogCard'

const MainSection = styled.div`
  padding-top: 94px;
  height: fit-content;
`

export default class TagTemplate extends Component {
  render() {
    const { pathContext, data } = this.props
    const { allMarkdownRemark: post } = data
    const tag = pathContext.tag
    const blog = post.edges.filter(
      post => post.node.frontmatter.contentType === 'blog'
    )
    const tagsArray = []
    blog.map(({ node: post }, i) =>
      post.frontmatter.tags.map(targetTag => {
        if (targetTag.name === tag) {
          tagsArray.push(post)
        }
      })
    )
    return (
      <div>
        <Helmet title={`Tagged in ${tag}`} />
        <MainSection>
          <Container>
            {tagsArray.map((post, i) => <BlogCard key={i} post={post} />)}
          </Container>
        </MainSection>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query TagPage {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
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
