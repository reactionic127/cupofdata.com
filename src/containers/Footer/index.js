import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from  '../../components/Global'

const Wrapper = styled.div`
	background-color: ${({theme}) => theme.footer.color.background};
`
const Text = styled.h4`
	color: ${({theme}) => theme.footer.color.text};
	font-size: 14px;
	padding: 0;
`

const Footer = () => (
	<Wrapper>
		<Container>
			<Row>
				<Col sm="8">
					<Text>Copyright © 2015-2017 cupofdata.com, Made with love in Atlanta.</Text>
				</Col>
				<Col>
					<Text>Privacy Policy</Text>
				</Col>
				<Col>
					<Text>Terms of service</Text>
				</Col>
			</Row>
		</Container>
	</Wrapper>
)
export default Footer;