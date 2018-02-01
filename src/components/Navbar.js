import React from 'react'
import styled from 'styled-components'
import Link, { withPrefix } from 'gatsby-link'

const Navbar = styled.div`
	display: flex;
	justify-content: space-between;
`
const NavItem = styled.li`
	padding: 0 0.7rem;
	color: ${props => props.theme.navbar.textColor}
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
	.nav-link {
		color: ${props => props.theme.navbar.textColor};
	}
`

const NavContainer = (props) => (
	<Navbar>
		<Link to="/" className="navbar-brand">
      <img className="logo" src={withPrefix('/files/images/img-logo.svg')} width="120" />
    </Link>
    <NavWrapper className='nav navbar-nav'>
      <NavItem className='nav-item'>
        <Link to='/features' className='nav-link'>Features</Link>
      </NavItem>
      <NavItem className='nav-item'>
        <Link to='/pricing' className='nav-link'>Pricing</Link>
      </NavItem>
      <NavItem className='nav-item'>
        <Link to='/company' className='nav-link'>Company</Link>
      </NavItem>
      <NavItem className='nav-item'>
        <Link to='/resouces' className='nav-link'>Resources</Link>
      </NavItem>
      <NavItem className='nav-item'>
        <Link to='/blog' className='nav-link'>Blog</Link>
      </NavItem>
      <NavItem className='nav-item'>
        <Link to='/login' className='nav-link'>Login</Link>
      </NavItem>
    </NavWrapper>
	</Navbar>
)
export default NavContainer