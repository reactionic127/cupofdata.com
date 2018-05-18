import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Container } from './Layout'
import Link from 'gatsby-link'

import logoImgDark from '../img/img-logo-dark.svg'

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  border-bottom: ${props => props.theme.navbar.borderBottom};
  transition: all 0.5s;
  transition-delay: 0.5s;
  background: ${props => props.theme.navbar.background};

  @media only screen and (max-width: 7950px) {
    padding: 1rem 15px;
    background: ${props => props.theme.navbar.background};
  }
`

const NavItem = styled.li`
  color: ${props => props.theme.navbar.textColor};
  :last-child {
    margin-left: 1.75rem;
    a {
      border-radius: 2px;
      border: 1px solid ${props => props.theme.navbar.textColor};
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 1rem 0;
    color: #000;
    :last-child {
      margin-left: 0rem;
    }
  }
`

const NavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  @media only screen and (max-width: 780px) {
    position: absolute;
    top: 5rem;
    left: 0;
    height: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    padding: 0;
    transition: height 0.5s;
    transition-delay: 0.5s;
    margin: 0;
    background-color: #ffffff;
    ${props =>
      props.active &&
      css`
        height: 330px;
      `};
  }
  @media screen and (max-width: 576px) {
    top: 4rem;
  }
`

const NavLink = styled(Link)`
  font-family: GTWalsheimMedium;
  font-size: 18px;
  padding: 0.5rem 1.75rem;
  color: ${props => props.theme.navbar.textColor};
  transition: color 0.5s;
  text-decoration: none;
  cursor: pointer;
`

const NavSection = Container.extend`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const MobileNav = styled.div`
  display: none;
  background: transparent;
  @media only screen and (max-width: 780px) {
    display: block;
    margin-right: 30px;
  }
`

const Toggle = styled.a`
  cursor: pointer;
`

const ToggleSpan = styled.span`
  cursor: pointer;
  border-radius: 1px;
  height: 2px;
  width: 30px;
  background: ${props => props.theme.navbar.textColor};
  position: absolute;
  display: block;
  content: '';
  ::before {
    cursor: pointer;
    border-radius: 1px;
    height: 2px;
    width: 30px;
    background: ${props => props.theme.navbar.textColor};
    position: absolute;
    display: block;
    content: '';
    top: -10px;
  }
  ::after {
    cursor: pointer;
    border-radius: 1px;
    height: 2px;
    width: 30px;
    background: ${props => props.theme.navbar.textColor};
    position: absolute;
    display: block;
    content: '';
    bottom: -10px;
  }
  ${props =>
    props.active &&
    css`
      background-color: transparent;
      ::before {
        top: 0;
        transform: rotate(45deg);
        background-color: black;
      }
      ::after {
        top: 0;
        transform: rotate(-45deg);
        background-color: black;
      }
    `};
`

const LogoImg = styled.div`
  width: 120px;
  background: url(${logoImgDark});
  height: 58px;
  background-size: cover;
  @media screen and (max-width: 576px) {
    width: 80px;
    height: 38px;
    transition: background 0.5s;
    transition-delay: 0.5s;
  }
`

export default class NavContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsible: false,
    }
  }
  onCollapse = () => {
    this.setState(
      {
        collapsible: !this.state.collapsible,
      },
      () => {
        if (this.state.collapsible) {
          this.props.onCollapse('secondary')
        } else {
          if (this.props.secondary) {
            this.props.onCollapse('secondary')
          } else {
            this.props.onCollapse('primary')
          }
        }
      }
    )
  }
  UNSAFE_componentWillReceiveProps(props) {
    this.setState({ collapsible: props.dropdown })
  }
  moveTo = () => {
    this.setState({
      collapsible: false,
    })
  }
  render() {
    return (
      <Navbar>
        <NavSection>
          <Link to="/" onClick={this.moveTo}>
            <LogoImg />
          </Link>
          <MobileNav onClick={this.onCollapse}>
            <Toggle>
              <ToggleSpan active={this.state.collapsible} />
            </Toggle>
          </MobileNav>
          <NavWrapper active={this.state.collapsible}>
            <NavItem>
              <NavLink to="/features" onClick={this.moveTo}>
                Features
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/pricing" onClick={this.moveTo}>
                Pricing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" onClick={this.moveTo}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog" onClick={this.moveTo}>
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/onboard" onClick={this.moveTo}>
                Early Access
              </NavLink>
            </NavItem>
          </NavWrapper>
        </NavSection>
      </Navbar>
    )
  }
}

NavContainer.propTypes = {
  onCollapse: PropTypes.func,
  secondary: PropTypes.bool,
  dropdown: PropTypes.bool,
}
