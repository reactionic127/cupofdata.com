import React, { Fragment } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import { Container, Row, Col } from '../components/Layout'
import Button from '../components/Button'

const MainSection = styled.div`
	padding-top: 94px;
  height: fit-content;
`
const Card = styled.div`
	padding: 2rem;
	border: 1px solid rgba(0,0,0, 0.1);
	max-width: 780px;
	margin: 1rem auto;
	height: 280px;
`
const BlogContainer = Container.extend`
	height: 100%;
	box-sizing: border-box;
`
const BlogRow = Row.extend`
	height: 100%;
	align-items: center;
`
const BlogImage= styled.img`
	border: 2px #35a73e solid;
`
const Topic = styled.h2`
	font-size: 24px;
	line-height: 31px;
	font-family: GTWalsheim;
`
const TimeStamp = styled.h5`
	font-family: Avenir;
	font-size: 16px;
	line-height: 24px;
	color: rgba(0,0,0,0.2);
`
const Summary = styled.p`
	font-family: Avenir;
	font-size: 16px;
	line-height: 26px;
	color: #000000;
	text-overflow: ellipsis;
  height: 130px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`
const LoadBtn = Button.extend`
	display: block;
	margin: 50px auto 73px;
`
const BlogMaster = ({data}) => {
	const { allMarkdownRemark: post } = data
	const blog = post.edges.filter((post) => post.node.frontmatter.contentType === 'blog')
	return (
		<Fragment>
	    <Helmet title={`Blogs | ${data.site.siteMetadata.title}`} />
	    <MainSection>
	      { blog && <Container>
	      	{ blog.map(({ node: post }, i) => (
	      		<Card key={i}>
	      			<BlogContainer>
	      				<BlogRow>
	      					<Col md="7">
	      						<Topic>{post.frontmatter.title}</Topic>
	      						<TimeStamp>{post.frontmatter.author} on {post.frontmatter.date}</TimeStamp>
	      						<Summary>{post.frontmatter.summary}</Summary>
	      					</Col>
	      					<Col md="5">
	      						<BlogImage src={post.frontmatter.postimage} width="100%"/>
	      					</Col>
	      				</BlogRow>
	      			</BlogContainer>
	      		</Card>
	      	))}
	      	<LoadBtn outline>Load more</LoadBtn>
	      	</Container>
	      }
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
            summary
            author
            postimage
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