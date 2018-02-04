import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Link, { withPrefix } from 'gatsby-link'

const ContactSection = () => (
	<div id="contact-section">
		<Container>
			<Row>
				<Col sm="5">
					<img src={withPrefix('/files/images/img-logo.svg')} width="120" />
					<p className="sub-content">Cup of Data’s mission is turbocharge growth at B2B SaaS companies using A.I.. By alleviating businesses from the manual, repetitive tasks associated with obtaining marketing qualified leads, marketers and sales professionals can focus on creating unique experiences with their customers and partners.</p>
				</Col>
				<Col sm="3">
					<h4 className="subtitle">SITEMAP</h4>
					<ul>
						<li className="mt-3"><Link className="sub-content" to="/">Home</Link></li>
						<li className="mt-3"><Link className="sub-content" to="/resources">Resources</Link></li>
						<li className="mt-3"><Link className="sub-content" to="/pricing">Pricing</Link></li>
						<li className="mt-3"><Link className="sub-content" to="/company">Company</Link></li>
						<li className="mt-3"><Link className="sub-content" to="/blogs">Blogs</Link></li>
					</ul>
				</Col>
				<Col sm="4">
					<h4 className="subtitle">CONTACT US</h4>
					<p className="sub-content">Cup of Data<br/>3423 Piedmont Rd NE<br/>Atlanta, GA 30305</p>
					<div className="social-bar mt-3">
						<i className="fa fa-facebook-square fa-2x mr-4" />
						<i className="fa fa-twitter fa-2x mr-4" />
						<i className="fa fa-linkedin-square fa-2x mr-4" />
						<i className="fa fa-github fa-2x mr-4" />
					</div>
				</Col>
			</Row>
		</Container>
	</div>
)
export default ContactSection
