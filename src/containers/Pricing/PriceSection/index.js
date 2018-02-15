import React from 'react'
import styled from 'styled-components'
import { H1, H5, P, Small } from '../../../components/Typography'
import { Container, Row, Col } from '../../../components/Layout'
import { OutlineRadioButton } from '../../../components/Button'
import PriceCard from '../../../components/PriceCard'

const PriceSection = styled.div`
	padding: 90px 0;
`
const PriceTitle = H1.extend`
	margin-top: 3rem;
	@media screen and (max-width: 576px) {
		font-size: 24px;
	}
`
const NoteText = H5.extend`
	font-weight: 400;
`
const PlanGroup = styled.div`
	padding: 2rem 0 0;
	margin-top: 0.5rem;
`
const Discount = Small.extend`
	color: #FF842B;
	margin-left: 0.5rem;
	letter-spacing: 0;
`
export default class PlanSections extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			plan: 'monthly'
		}
	}
	render () {
		return (
			<PriceSection>
				<Container>
					<PriceTitle>Start understanding your users</PriceTitle>
					<NoteText>Try any plan free for 14 days. No credit card required*</NoteText>
					<PlanGroup>
							<OutlineRadioButton
								active={this.state.plan === 'monthly'}
								onClick={() => this.setState({ plan: 'monthly'})}
							>
								MONTHLY
							</OutlineRadioButton>
							<OutlineRadioButton
								active={this.state.plan === 'yearly'}
								onClick={() => this.setState({ plan: 'yearly'})}
							>
								YEARLY
								<Discount>20% OFF</Discount>
							</OutlineRadioButton>
					</PlanGroup>
					<Row>
						<Col sm="4">
							<PriceCard
								title="STARTER"
								price={689}
								validatedContacts={1000}
								machineNumber={5}
								runtime={420}
								tryPath="/onboard"
							/>
						</Col>
						<Col sm="4">
							<PriceCard
								title="PROFESSIONAL"
								price={1250}
								validatedContacts={2000}
								machineNumber={10}
								runtime={640}
								tryPath="/onboard"
							/>
						</Col>
						<Col sm="4">
							<PriceCard
								validatedContacts="Custom"
								machineNumber="Custom"
								runtime="Custom"
								enterprise
								tryPath="/onboard"
							/>
						</Col>
					</Row>
				</Container>
			</PriceSection>
		)
	}
}