import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../components/Typography'
import { Container, Row, Col } from '../../components/Layout'
import Button from '../../components/Button'
import { withPrefix} from 'gatsby-link'
const Wrapper = styled.div`
	background: #f5f7fa;
	padding-top: 50px;
	height: 620px;
	@media screen and (max-width: 576px) {
		height: 770px;
	}
`

const Title = SectionTitle.extend`
	margin-bottom: 94px;
	@media screen and (max-width: 576px) {
		margin-bottom: 2rem;
	}
`

const FeatureContent = styled.p`
	font-size: 16px;
	line-height: 26px;
	max-width: 380px;
	font-family: Avenir;
	margin-bottom: 2rem;
	padding-left: 30px;
	text-indent: -7px;
`
const LearnMore = Button.extend`
	@media screen and (max-width: 576px) {
		display: none;
	}
`
const FeatureRow = Row.extend`
	@media screen and (max-width: 576px) {
		flex-wrap: wrap-reverse;
	}
`
const FeaturesView = () => (
	<Wrapper>
		<Title>Features</Title>
		<Container>
			<FeatureRow>
				<Col xs="12" sm="6">
					<img src={withPrefix('/files/images/img-desktop.png')} width="100%" />
				</Col>
				<Col xs="12" sm="6">
					<FeatureContent><i className="fa fa-angle-right"/> Quickly identify relevant accounts and contacts</FeatureContent>
					<FeatureContent><i className="fa fa-angle-right"/> Improve prospect quality scores with machine learning</FeatureContent>
					<FeatureContent><i className="fa fa-angle-right"/> Obtain insights on how to engage contacts with context</FeatureContent>
					<FeatureContent><i className="fa fa-angle-right"/> Trigger targeted engagements using your existing Martech stack</FeatureContent>
					<LearnMore>Learn More</LearnMore>
				</Col>
			</FeatureRow>
		</Container>
	</Wrapper>
)

export default FeaturesView
