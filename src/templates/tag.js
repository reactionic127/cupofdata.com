import React from 'react'

export default class TagTemplate extends React.Component {
  render() {
    const tag = this.props.pathContext.tag
    const postEdges = this.props.data.allMarkdownRemark.edges
    console.log('tags page is rendered', tag, postEdges)
    return (
      <div>
        {/* <PostListing postEdges={postEdges} /> */}
        adsfasdfasdfasdfasdfasdf
      </div>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          frontmatter {
            contentType
            title
            path
            postimage
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`
