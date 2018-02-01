import React from 'react'
import styled from 'styled-components'
import Link, { withPrefix } from 'gatsby-link'

const Navbar = styled.div`
	display: flex;
	justify-content: space-between;
`
const NavItem = styled.li`
	padding: 0.5rem 1.25rem;
	color: ${props => props.theme.navbar.textColor};
	:last-child {
    border: 1px solid ${props => props.theme.navbar.textColor};
    border-radius: 4px;
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
  color: ${props => props.theme.navbar.textColor};
  text-decoration: none;
`

const NavContainer = (props) => (
	<Navbar>
		<Link to="/" className="navbar-brand">
      <img className="logo" src={withPrefix('/files/images/img-logo.svg')} width="120" />
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