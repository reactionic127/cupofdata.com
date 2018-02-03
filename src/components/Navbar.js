import React from 'react'
import styled from 'styled-components'
import Link, { withPrefix } from 'gatsby-link'

const Navbar = styled.div`
	display: flex;
	justify-content: space-between;
  padding: 1rem 3rem;
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

const NavContainer = (props) => (
	<Navbar>
		<Link to="/" className="navbar-brand">
      <img className="logo" src={withPrefix('/files/images/img-logo.png')} width="120" />
    </Link>
    <NavWrapper>
      <NavItem>
        <NavLink to='/features'>Features</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/pricing'>Pricing</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/company'>Company</NavLink>
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
	</Navbar>
)
export default NavContainer