import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../components/Layout'
import graphql from 'graphql'
import { ThemeProvider } from 'styled-components'
import ContactSection from '../components/Contact'
import Footer from '../components/Footer'
import NavContainer from '../components/Navbar'

// main site style
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
  UNSAFE_componentWillMount() {
    this.updateDimensions()
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.updateDimensions.bind(this))
    }
    this.checkPath(this.props)
  }
  UNSAFE_componentWillReceiveProps(props) {
    this.checkPath(props)
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.updateDimensions.bind(this))
    }
  }
  updateDimensions() {
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
    const { data } = this.props
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
              <ContactSection data={data.allMarkdownRemark.edges} />
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
  location: PropTypes.object,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
}

export const pageQuery = graphql`
  query LayoutIndexQuery {
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
            description
            summary
            newsFlag
            postimage
            position
            comment
            photo
            button
            header
            personName
            personRole
            mission
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
