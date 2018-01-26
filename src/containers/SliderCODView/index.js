import React from 'react';
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import { withPrefix} from 'gatsby-link'

export default class SliderCODView extends React.Component {
	componentDidMount() {
	  
	}
	render() {
		return (
			<div>
        <Container className="cod-service">
        	<h2 className="text-center section-text mb-5">After cupofdata</h2>
        	<div className="row">
        		<div className="col-sm-3 text-center">
        			<div className="clearfix img-view">
        				<img src={withPrefix('/files/images/img-finger.svg')} width="45"/>
        			</div>
        			<div className="service-content py-4 text-center">
        				<h4 className="subtitle">Identify</h4>
        			</div>
        		</div>
        		<div className="col-sm-3 text-center">
	        		<div className="clearfix img-view">
	        			<img src={withPrefix('/files/images/img-expand.svg')} width="130"/>
	        		</div>
	        		<div className="service-content py-4 text-center">
	        			<h4 className="subtitle">Expand with quality score</h4>
	        			<p className="sub-content">(Maching & Deep Learning)</p>
	        		</div>
        		</div>
        		<div className="col-sm-3 text-center">
	        		<div className="clearfix img-view">
	        			<img src={withPrefix('/files/images/img-integrate_engage.svg')} width="180" />
	        		</div>
	        		<div className="service-content py-4 text-center">
	        			<h4 className="subtitle">Integrate and engage</h4>
	        		</div>
        		</div>
        		<div className="col-sm-3 text-center">
	        		<div className="clearfix img-view">
	        			<img src={withPrefix('/files/images/img-advocate.svg')} width="61" />
	        		</div>
	        		<div className="service-content py-4 text-center">
	        			<h4 className="subtitle">Advocate</h4>
	        			<p className="sub-content">(Inbound Marketing Channels)</p>
	        		</div>
        		</div>
        	</div>
        </Container>
			</div>
		)
	}
}