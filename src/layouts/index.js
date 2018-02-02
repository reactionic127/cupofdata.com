import React from 'react'
import { withPrefix } from 'gatsby-link'
import { Container } from '../components/Global'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import ContactSection from '../containers/Contact'
import Footer from '../containers/Footer'

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'
import '../../static/files/css/fontawesome-all.min.css'

// main site style
import global from '../styles/global'
import theme from '../styles/theme'

const TemplateWrapper = ({ children, data }) => {
  let user
  if (typeof window !== 'undefined') {
    user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
  }
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <div className='pageContent'>{children()}</div>
        <ContactSection />
        <Footer />
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
  }
`

export default TemplateWrapper
