import React, { Fragment } from 'react'
import { Container } from '../components/Layout'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Link, { withPrefix } from 'gatsby-link'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import ContactSection from '../containers/Contact'
import Footer from '../containers/Footer'
import NavContainer from '../containers/Navbar'

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'
import '../../static/files/css/fontawesome-all.min.css'

// main site style
import global from '../styles/global'
import mainTheme from '../styles/theme'

const TemplateWrapper = ({ children, data, match, location }) => {
  const { allMarkdownRemark: post } = data
  const blog = post.edges.filter((post) => post.node.frontmatter.contentType === 'blog')
  const blogDetail = blog.find(({ node: post}) => {
    return post.frontmatter.path == location.pathname
  })
  const undefinedReg = /404*\w/
  const undefinedStatus = undefinedReg.test(location.pathname) || location.pathname === '/onboard';
  let user, theme
  if ( location.pathname === '/blog' || blogDetail ){
    theme = mainTheme.secondary
  } else {
    theme = mainTheme.primary
  }
  if (typeof window !== 'undefined') {
    user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
  }
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        {
          !undefinedStatus && <Container>
            <NavContainer />
          </Container>
        }
        <div className='pageContent'>{children()}</div>
        {
          !undefinedStatus &&
          <Fragment>
            <ContactSection />
            <Footer />
          </Fragment>
        }
      </div>
    </ThemeProvider>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
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

export default TemplateWrapper
