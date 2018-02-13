import React from 'react'
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
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../static/files/css/fontawesome-all.min.css'

// main site style
import global from '../styles/global'
import mainTheme from '../styles/theme'
export default class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: mainTheme.primary,
      undefinedStatus: false,
      dropdown: false,
      secondary: false,
    }
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    this.checkPath(this.props)
  }
  componentWillReceiveProps(props) {
    this.checkPath(props)
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
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
    let themeType = 'primary';
    const { children, data, match, location } = props;
    const { allMarkdownRemark: post } = data
    const blog = post.edges.filter((post) => post.node.frontmatter.contentType === 'blog')
    const blogDetail = blog.find(({ node: post}) => {
      return post.frontmatter.path == location.pathname
    })
    const undefinedReg = /404*\w/
    const undefinedStatus = undefinedReg.test(location.pathname) || location.pathname === '/onboard';
    switch(location.pathname) {
      case '/blog':
        themeType = 'secondary'
        break;
      case '/terms':
        themeType = 'secondary'
        break;
      case '/privacy':
        themeType = 'secondary'
        break;
      case '/about':
        themeType = 'secondary'
        break;
      default:
        themeType = 'primary'
    }
    
    if ( themeType === 'secondary' || blogDetail ){
      this.setState({
        undefinedStatus,
        theme: mainTheme.secondary,
        secondary: true,
        dropdown: false
      })
    } else {
      this.setState({
        undefinedStatus,
        theme: mainTheme.primary,
        secondary: false,
        dropdown: false
      })
    }
  }
  render () {
    let user
    if (typeof window !== 'undefined') {
      user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
    }
    return (
      <ThemeProvider theme={this.state.theme}>
        <div className='App'>
          {
            !this.state.undefinedStatus && <Container>
              <NavContainer
                onCollapse={(type) => { this.setState({ theme: mainTheme[type], dropdown: !this.state.dropdown }) }}
                dropdown={this.state.dropdown}
                secondary={this.state.secondary}
              />
            </Container>
          }
          <div className='pageContent'>{this.props.children()}</div>
          {
            !this.state.undefinedStatus &&
            <div>
              <ContactSection />
              <Footer />
            </div>
          }
        </div>
      </ThemeProvider>
    )
  }
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

