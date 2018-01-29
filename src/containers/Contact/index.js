import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Link, { withPrefix } from 'gatsby-link'

const ContactSection = () => (
	<div id="contact-section">
		<Container>
			<Row>
				<Col sm="5">
					<img src={withPrefix('/files/images/img-logo.svg')} width="120" />
					<p className="sub-content">Guided data science consists of services used by business analysts and data scientists to enhance their productivity while exploring data, building machine and deep learning models, and creating rich visualizations to tell their data stories.</p>
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
					<p className="sub-content">Dallas<br/>10878 Plano Road, Suite A, Bldg 2<br/>Dallas, TX 75238</p>
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