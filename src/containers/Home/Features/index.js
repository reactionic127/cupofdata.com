import React from 'react'
import styled from 'styled-components'
import { H2, H6 } from '../../../components/Typography'
import { Container, Row, Col } from '../../../components/Layout'
import Button from '../../../components/Button'
import { withPrefix} from 'gatsby-link'
const Wrapper = styled.div`
	background: #f5f7fa;
	padding-top: 50px;
	height: 680px;
`

const Title = H2.extend`
	margin-bottom: 94px;
	font-family: GTWalsheim;
	text-align: center;
	@media screen and (max-width: 576px) {
		margin-bottom: 18px;
	}
`

const FeatureContent = H6.extend`
	max-width: 380px;
	font-weight: 400;
	margin-bottom: 2rem;
	padding-left: 1rem;
	@media screen and (max-width: 576px) {
		margin-bottom: 1rem;
	}
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
const UL = styled.ul`
	padding: 0 1rem;
	list-style: none;
`
const LI = styled.li`
	display: inline-flex !important;
	::before {	
		content: "\\F105";
		line-height: 25px;
	}
`
const FeaturesView = () => (
	<Wrapper>
		<Title>Features</Title>
		<Container>
			<FeatureRow>
				<Col xs="12" sm="6">
					<img src={withPrefix('/files/images/img-desktop.svg')} width="100%" />
				</Col>
				<Col xs="12" sm="6">
					<UL>
						<LI className="fa"><FeatureContent>Quickly identify relevant accounts and contacts</FeatureContent></LI>
						<LI className="fa"><FeatureContent>Improve prospect quality scores with machine learning</FeatureContent></LI>
						<LI className="fa"><FeatureContent>Obtain insights on how to engage contacts with context</FeatureContent></LI>
						<LI className="fa"><FeatureContent>Trigger targeted engagements using your existing Martech stack</FeatureContent></LI>
					</UL>
					{/*<LearnMore>Learn More</LearnMore>*/}
				</Col>
			</FeatureRow>
		</Container>
	</Wrapper>
)

export default FeaturesView
