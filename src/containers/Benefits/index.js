import React from 'react';
import { Container, Row, Col } from '../../components/Global'
import { withPrefix} from 'gatsby-link'

const BenefitsSection = () => (
	<div id="benefits-wrapper">
		<h2 className="text-center section-text">Benefits</h2>
		<Container>
			<Row>
				<Col xs="3" className="text-center">
					<div className="img-view mb-4">
						<img src={withPrefix('files/images/img-sales.svg')} />
					</div>
					<h4 className="subtitle">Improve Salse alignment</h4>
					<p className="sub-content">Identify and send Sales Qualified Lead(SQLs) directly to CRMs</p>
				</Col>
				<Col xs="3" className="text-center">
					<div className="img-view mb-4">
						<img src={withPrefix('files/images/img-existing.svg')} />
					</div>
					<h4 className="subtitle">Integrate with existing stack</h4>
					<p className="sub-content">Track progress and update closed sales leads to improve AI model</p>
				</Col>
				<Col xs="3" className="text-center">
					<div className="img-view mb-4">
						<img src={withPrefix('files/images/img-shorten-sales.svg')} />
					</div>
					<h4 className="subtitle">Shorten sales cycles</h4>
					<p className="sub-content">Quickly identify inbound marketing channels to improve lead quality</p>
				</Col>
				<Col xs="3" className="text-center">
					<div className="img-view mb-4">
						<img src={withPrefix('files/images/img-clear-path.svg')} />
					</div>
					<h4 className="subtitle">Clearer path to ROI</h4>
					<p className="sub-content">Obtain ROI indicators to focus on best performing campaigns</p>
				</Col>
			</Row>
		</Container>
		
	</div>
)
export default BenefitsSection