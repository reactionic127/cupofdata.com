import React from 'react';
import { Row, Col } from 'reactstrap'
import { withPrefix} from 'gatsby-link'

const FeaturesView = () => (
	<div id="features-container">
		<h2 className="text-center section-text">Features</h2>
		<Row>
			<Col xs="6">
				<img src={withPrefix('/files/images/img-desktop.png')} />
			</Col>
			<Col xs="6">
				<p>1. Identify and target organizations</p>
				<p>2. Curate and verify contact list with on-demand Human intelligence</p>
				<p>3. Add contact quality scores with machine learning</p>
				<p>4. Trigger targeted actions using your existing Martech stack</p>
				<p>5. Measure and test</p>
				<button className="submit-button">Learn More</button>
			</Col>
		</Row>
	</div>
)
export default FeaturesView