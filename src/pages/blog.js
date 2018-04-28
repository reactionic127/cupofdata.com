import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Container } from '../components/Layout'
import BlogCard from '../components/BlogCard'
import Button from '../components/Button'

const MainSection = styled.div`
  padding-top: 94px;
  height: fit-content;
  background: rgb(251, 250, 252);
`

const LoadBtn = Button.extend`
  display: block;
  margin: 50px auto 73px;
  background: black;
`

const BlogMaster = ({ data }) => {
  const { allMarkdownRemark: post, allFile } = data
  const blog = post.edges.filter(
    post => post.node.frontmatter.contentType === 'blog'
  )
  let imagesArray = []
  allFile.edges.map(({ node: file }) => imagesArray.push(file))
  return (
    <div>
      <Helmet title={`Blog | ${data.site.siteMetadata.title}`} />
      <MainSection>
        {blog && (
          <Container>
            {blog.map(({ node: post }, i) => (
              <BlogCard key={i} post={post} imagesArray={imagesArray} />
            ))}
            <LoadBtn>Load more</LoadBtn>
          </Container>
        )}
      </MainSection>
    </div>
  )
}

BlogMaster.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
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
            tags {
              name
            }
          }
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
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
