import React from 'react';
import { Container, Button } from 'reactstrap'
import { withPrefix} from 'gatsby-link'

const AutomatedMarketingSection = () => (
	<div id="automarketing-wrapper">
		<div className="overlay position-absolute w-100 h-100"></div>
		<Container className="main-part position-relative">
			<h2 className="section-text">Automate marketing</h2>
			<p className="subtitle">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
			<Button className="py-0 px-5 border-0">Register Now</Button>
		</Container>
	</div>
)
export default AutomatedMarketingSection