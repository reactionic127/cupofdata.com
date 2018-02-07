import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from  '../../components/Layout'
import Link from 'gatsby-link'

const Wrapper = styled.div`
	background-color: ${({theme}) => theme.footer.color.background};
`
const Text = styled.h4`
	color: ${({theme}) => theme.footer.color.text};
	font-size: 14px;
	padding: 1.5rem 0 1.5rem 0;
`
const CustomLink = styled(Link)`
	text-decoration: none;
`
const Footer = () => (
	<Wrapper>
		<Container>
			<Row>
				<Col sm="8">
					<Text>Copyright © 2018 3Blades LLC - Made with love in Atlanta.</Text>
				</Col>
				<Col sm="2">
					<CustomLink to="/privacy"><Text>Privacy Policy</Text></CustomLink>
				</Col>
				<Col sm="2">
					<CustomLink to="/terms"><Text>Terms of Use</Text></CustomLink>
				</Col>
			</Row>
		</Container>
	</Wrapper>
)
export default Footer;
