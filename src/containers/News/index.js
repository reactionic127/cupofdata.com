import React from 'react'
import { Container, Row, Col } from '../../components/Global'
import Button from '../../components/Button'
import { withPrefix} from 'gatsby-link'

const NewsView = () => (
	<div id="news-wrapper">
		<h2 className="text-center section-text">In the news</h2>
		<Container className="pt-5 text-center">
			<Row>
				<Col sm="4">
					<img src={withPrefix('/files/images/img-news1.png')} width="100%" />
					<h4 className="subtitle text-left">Vlit esse cillum dolore eu fugiat nulla paratur</h4>
					<p className="sub-content text-left">Duis aute irure dolor in reprehenderit in voluptate velid esse cillum dolore eu fugiat nulla pariatur</p>
				</Col>
				<Col sm="4">
					<img src={withPrefix('/files/images/img-news2.png')} width="100%" />
					<h4 className="subtitle text-left">Vlit esse cillum dolore eu fugiat nulla paratur</h4>
					<p className="sub-content text-left">Irure dolor in reprehenderit in voluptate velid esse cillum dolore eu fugiat nulla pariatur</p>
				</Col>
				<Col sm="4">
					<img src={withPrefix('/files/images/img-news3.png')} width="100%" />
					<h4 className="subtitle text-left">Vlit esse cillum dolore eu fugiat nulla paratur</h4>
					<p className="sub-content text-left">Duis aute irure dolor in reprehenderit in voluptate velid esse cillum dolore eu fugiat nulla pariatur</p>
				</Col>
			</Row>
			<Button className="btn-readmore">Read more</Button>
		</Container>
	</div>
)
export default NewsView
