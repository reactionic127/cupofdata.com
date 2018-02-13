import React from 'react'
import styled from 'styled-components'
import { Container, Card, CardTitle, CardGroup, CardBody } from '../components/Layout'
import { H1, Comments } from '../components/Typography'
import Helmet from 'react-helmet'
import graphql from 'graphql'
import Link from 'gatsby-link'

// find a post title by path
const findNode = (path, data) => data.allMarkdownRemark.edges
  .map(edge => edge.node.frontmatter)
  .filter(r => r.path === path)
  .pop()


const MainSection = styled.div`
  display: block;
  position: relative;
  padding-top: 94px;
  height: 600px;
  color: #ffffff;
  border: 2px solid #35a73e;
  ::before {
    content: '';
    opacity: 0.4;
    z-index: -1;
    background: url(${props => props.background});
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: center;
  }
  ::after {
    content: '';
    z-index: -1;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
const HeaderSection = styled.div`
  position: absolute;
  width: 50%;
  max-width: 665px;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`
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
export default function Template ({ data }) {
  const { markdownRemark: post } = data
  const related = post.frontmatter.related ? post.frontmatter.related.map(r => findNode(r.post, data)) : []
  return (
    <div>
      <Helmet title={`Blog | ${post.frontmatter.title}`}>
        {data.site.siteMetadata.disqus && (
          <script id='dsq-count-scr' src='//gatsby-starter-blog.disqus.com/count.js' async />
        )}
        {data.site.siteMetadata.disqus && (
          <script>{`(function() {
          var d = document, s = d.createElement('script');
          s.src = 'https://${data.site.siteMetadata.disqus}.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
          })();`}</script>
        )}
      </Helmet>
{/*      <MainSection background={post.frontmatter.postimage}>
        <HeaderSection>
          <H1>{post.frontmatter.title}</H1>
          <Comments>By {post.frontmatter.author}</Comments>
          <Comments>on {post.frontmatter.date}</Comments>
        </HeaderSection>
      </MainSection>*/}

      <BlogContainer dangerouslySetInnerHTML={{ __html: post.html }} />

      {post.frontmatter.related && (<Container><h4>Related</h4><CardGroup>
        {related.map((r, i) => (
          <Card key={i}>
            <CardBody>
              <CardTitle>
                <Link to={r.path}>{r.title}</Link>
              </CardTitle>
            </CardBody>
          </Card>
        ))}
      </CardGroup></Container>)}

      {data.site.siteMetadata.disqus && (<Container>
        <hr />
        <div id='disqus_thread' />
      </Container>)}
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        disqus
      }
    }
    
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

    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }){
      edges{
        node{
          frontmatter{
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
