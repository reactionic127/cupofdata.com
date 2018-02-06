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
  border-bottom: ${props => props.theme.navbar.borderBottom}
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
  flex-wrap: wrap;
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
const LogoImg = styled.div`
  width: 120px;
  background: url(${props => props.theme.navbar.logoImg});
  height: 58px;
  background-size: cover;
`
const NavContainer = (props) => {
  console.log('-- props --\n', props)
  return (
    <Navbar>
      <NavSection>
        <Link to="/">
          <LogoImg />
        </Link>
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
}
export default NavContainer