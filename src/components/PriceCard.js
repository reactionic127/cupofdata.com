import React from 'react'
import { withPrefix } from 'gatsby-link'
import styled, { css } from 'styled-components'
import { navigateTo } from 'gatsby-link'
import { H1, H6, P } from './Typography'
import Button from './Button'


const PlanCard = styled.div`
		border: 1px solid rgba(44, 51, 59, 0.2);
		text-align: center;
		margin-top: 2rem;
	${({enterpriseMode}) => enterpriseMode && css`
		background-color: #495CF2;
		color: white;	
		border: none;
	`}
`
const PlanTitle = P.extend`
	font-weight: 600;
	padding: 5px 0;
	letter-spacing: 0.2rem;
	background-color: #f5f7fa;
	border-bottom: 1px solid rgba(44, 51, 59, 0.2);
`
const Price = H1.extend`
	margin-top: 1.5rem;
	font-weight: 400;
	font-family: Avenir;
	letter-spacing: 0.02em;
`
const PriceMode = P.extend`
	font-size: 12px;
	line-height: 16px;
	font-weight: 600;
	margin-bottom: 2.5rem;
	letter-spacing: 0.1em;
`
const PriceDetail = H6.extend`
	margin-bottom: 1.5rem;
	font-weight: 500;
`
const TryButton = Button.extend`
	font-size: 14px;
	line-height: 19px;
	padding: 0.5rem 2.5rem;
	margin: 1.5rem 0 2.5rem;
`
const CardHeader = styled.div`
	background-color: rgba(0,0,0,0.05);
	text-align: center;
	padding: 46px 0 29px 0;
	margin-bottom: 2rem;
`
const EnterpriseTitle = styled.h4`
	font-size: 22px;
	font-family: Avenir;
	font-weight: 600;
	line-height: 30px;
	letter-spacing: 0.15em;
	text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);
`
const PriceCard = (props) => (
	<PlanCard enterpriseMode={props.enterprise}>
		{
			props.enterprise
			? <CardHeader>
				<img src={withPrefix('/files/images/img-enterprise.svg')} />
				<EnterpriseTitle>ENTERPRISE</EnterpriseTitle>
			</CardHeader>
			:<div>
				<PlanTitle>{props.title}</PlanTitle>
				<Price>{props.price}</Price>
				<PriceMode>USD PER MONTH</PriceMode>
			</div>
		}
		<PriceDetail>{props.validatedContacts} validated contacts</PriceDetail>
		<PriceDetail>24/7 support</PriceDetail>
		<PriceDetail>{props.machineNumber} virtual machines</PriceDetail>
		<PriceDetail>{props.runtime} hrs runtime</PriceDetail>
		<TryButton onClick={() => navigateTo(props.tryPath)}>Try it for free</TryButton>
	</PlanCard>
)
export default PriceCard