import React, { Fragment } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Link from 'gatsby-link'

const Iframe = styled.iframe`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border: none;
`
const BackButton = Button.extend`
	position: absolute;
	left: 50%;
	bottom: 32px;
	transform: translateX(-50%);
	box-shadow: 2px 4px rgba(0,0,0,0.1);
`
const Onboarding = () => (
	<Fragment>
		<Iframe width="100%" height="100%" frameborder="0" src="https://landbot.io/u/H-25231-G88YW0YD97JZI1KT/index.html"></Iframe>
		<Link to='/'><BackButton>Go back to home page</BackButton></Link>
	</Fragment>
)
export default Onboarding