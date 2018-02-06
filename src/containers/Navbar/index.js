import React from 'react'
import styled from 'styled-components'
import { Container } from '../../components/Global'
import Link, { withPrefix } from 'gatsby-link'

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
`
const NavItem = styled.li`
  color: ${props => props.theme.navbar.textColor};
  :last-child a {
    border: 1px solid ${props => props.theme.navbar.textColor};
    border-radius: 2px;
  }
`
const NavWrapper =  styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
`
const NavLink = styled(Link)`
  padding: 0.5rem 1.75rem;
  color: ${props => props.theme.navbar.textColor};
  text-decoration: none;
`
const NavSection = Container.extend`
  display: flex;
  justify-content: space-around;
`

const MobileNav = styled.div`
  display: none;
  position: relative;
  background: transparent;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`
const Toggle = styled.a`
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
`
const ToggleSpan = styled.span`
  cursor: pointer;
  border-radius: 1px;
  height: 5px;
  width: 35px;
  background: #ffffff;
  position: absolute;
  display: block;
  content: '';
  transition: all 300ms ease-in-out;
  ::before {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: #ffffff;
    position: absolute;
    display: block;
    content: '';
    top: -10px;
    transition: all 300ms ease-in-out;
  }
  ::after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: #ffffff;
    position: absolute;
    display: block;
    content: '';
    transition: all 300ms ease-in-out;
    bottom: -10px;
  }
  ${props => props.active && css`
    background-color: transparent;
    ::before {
      top: 0;
      transform: rotate(45deg);
    }
    ::before {
      top: 0;
      transform: rotate(-45deg);
    }
  `}
`
const NavContainer = (props) => (
  <Navbar>
    <NavSection>
      <Link to="/" className="navbar-brand">
        <img className="logo" src={withPrefix('/files/images/img-logo.png')} width="120" />
      </Link>
      <MobileNav><Toggle><ToggleSpan></ToggleSpan></Toggle></MobileNav>
      <NavWrapper>
        <NavItem>
          <NavLink to='/features'>Features</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/pricing'>Pricing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/about'>Company</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/resouces'>Resources</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/blog'>Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/login'>Login</NavLink>
        </NavItem>
      </NavWrapper>
    </NavSection>
  </Navbar>
  
)
export default NavContainer