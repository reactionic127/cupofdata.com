import React from 'react'
import { Container, Row, Col } from  'reactstrap'

const Footer = () => (
	<div id="footer">
		<Container>
			<Row>
				<Col sm="8">
					<h4 className="footer-text">Copyright © 2015-2017 cupofdata.com, Made with love in Atlanta.</h4>
				</Col>
				<Col sm="2">
					<h4 className="footer-text">Privacy Policy</h4>
				</Col>
				<Col sm="2">
					<h4 className="footer-text">Terms of service</h4>
				</Col>
			</Row>
		</Container>
	</div>
)
export default Footer;