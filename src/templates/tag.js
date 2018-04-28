import React, { Component } from 'react'
import PropTypes from 'prop-types'
import graphql from 'graphql'
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
    const { allMarkdownRemark: post, allFile } = data
    const tag = pathContext.tag
    const blog = post.edges.filter(
      post => post.node.frontmatter.contentType === 'blog'
    )
    const tagsArray = []
    blog.map(({ node: post }) =>
      post.frontmatter.tags.map(targetTag => {
        if (targetTag.name === tag) {
          tagsArray.push(post)
        }
      })
    )
    let imagesArray = []
    allFile.edges.map(({ node: file }) => imagesArray.push(file))
    return (
      <div>
        <Helmet title={`Tagged in ${tag}`} />
        <MainSection>
          <Container>
            {tagsArray.map((post, i) => (
              <BlogCard key={i} post={post} imagesArray={imagesArray} />
            ))}
          </Container>
        </MainSection>
      </div>
    )
  }
}

TagTemplate.propTypes = {
  data: PropTypes.object,
  pathContext: PropTypes.object,
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
    allFile(filter: { absolutePath: { regex: "/images/" } }) {
      edges {
        node {
          absolutePath
          relativePath
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
