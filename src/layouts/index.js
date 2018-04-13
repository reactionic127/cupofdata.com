import React from 'react'
import { Container } from '../components/Layout'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Link, { withPrefix } from 'gatsby-link'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import Footer from '../components/Footer'
import NavContainer from '../components/Navbar'

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'
import '../../static/files/css/fontawesome-all.min.css'

// main site style
import global from '../styles/global'
import mainTheme from '../styles/theme'

export default class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: mainTheme.secondary,
      hideNav: false,
      dropdown: false,
      secondary: false,
    }
  }
  componentWillMount() {
    this.updateDimensions()
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.updateDimensions.bind(this))
    }
    this.checkPath(this.props)
  }
  componentWillReceiveProps(props) {
    this.checkPath(props)
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.updateDimensions.bind(this))
    }
  }
  updateDimensions() {
    const { location } = this.props
    if (typeof screen !== `undefined`) {
      if (screen.width > 576) {
        if (this.state.secondary) {
          this.setState({
            theme: mainTheme.secondary,
            dropdown: false,
          })
        } else {
          this.setState({
            theme: mainTheme.primary,
            dropdown: false,
          })
        }
      }
    }
  }
  checkPath(props) {
    let themeType = 'primary'
    const { pathname } = props.location
    const undefinedReg = /404*\w/
    const onboardReg = /onboard*\w/
    const betaForm = /beta*\w/
    const hideNav =
      undefinedReg.test(pathname) ||
      onboardReg.test(pathname) ||
      betaForm.test(pathname)
    this.setState({
      hideNav,
      theme: mainTheme.secondary,
      secondary: true,
      dropdown: false,
    })
  }
  render() {
    const { site } = this.props.data
    return (
      <ThemeProvider theme={this.state.theme}>
        <div className="App">
          {!this.state.hideNav && (
            <Container>
              <NavContainer
                onCollapse={type => {
                  this.setState({
                    theme: mainTheme[type],
                    dropdown: !this.state.dropdown,
                  })
                }}
                dropdown={this.state.dropdown}
                secondary={this.state.secondary}
              />
            </Container>
          )}
          <div className="pageContent">{this.props.children()}</div>
          {!this.state.hideNav && (
            <div>
              <Footer />
            </div>
          )}
        </div>
      </ThemeProvider>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
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
