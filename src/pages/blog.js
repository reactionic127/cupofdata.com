import React, { Fragment } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import { Container } from '../components/Layout'

const MainSection = styled.div`
	padding-top: 94px;
  height: fit-content;
`

const BlogMaster = ({data}) => {
	const { allMarkdownRemark: post } = data
	const blog = post.edges.filter((post) => post.node.frontmatter.contentType === 'blog')
  console.log('-- blogmaster remark --\n', blog)
	return (
		<Fragment>
	    <Helmet title={`Blogs | ${data.site.siteMetadata.title}`} />

	    <MainSection>
	      <Container>
	        
	      </Container>
	    </MainSection>
	  </Fragment>
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