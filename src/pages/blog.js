import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import graphql from 'graphql'

const BlogMaster = ({data}) => {
	const { allMarkdownRemark: post } = data
	const blog = post.edges.filter((post) => post.node.frontmatter.contentType === 'blog')
  console.log('-- blogmaster remark --\n', blog)
	return (
		<Fragment>
	    <Helmet title={`Blogs | ${data.site.siteMetadata.title}`} />
{/*	    <MainSection>
	      <Container>
	        <Topic>{post.frontmatter.title}</Topic>
	        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
	      </Container>
	    </MainSection>
	    {post.frontmatter.members && <MemberSection>
	      <MemberTitle>OUR TEAM</MemberTitle>
	      <Row>
	        {post.frontmatter.members.map((member, i) => (
	          <Card sm="4" key={i} >
	            <Photo src={member.photo} width="225"></Photo>
	            <Fullname>{member.fullname}</Fullname>
	            <Position>{member.position}</Position>
	          </Card>
	        ))}
	      </Row>
	    </MemberSection>
	    }*/}
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