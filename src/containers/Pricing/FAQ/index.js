import React from 'react'
import styled from 'styled-components'
import { H3 } from '../../../components/Typography'
import { Container, Row, Col } from '../../../components/Layout'

const Wrapper = styled.div`
	padding: 50px 0 90px 0;
	background: #F5F7FA;
`
const Title = H3.extend`
	font-size: 30px;
	line-height: 35px;
	font-family: GTWalsheim;
	text-align: center;
	@media screen and (max-width: 576px) {
 	  padding: 0 2rem;
  }
`
const Content = Container.extend`
	margin-top: 60px;
	-webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  @media screen and (max-width: 576px) {
  	-webkit-column-count: 1;
	  -moz-column-count: 1;
	  column-count: 1;
	  padding: 0 2rem;
  }
`
const QASection = styled.div`
	margin-bottom: 40px;
	break-inside: avoid;
`
const Question =styled.h4`
	font-size: 20px;
	line-height: 24px;
	text-align: left;
	font-family: GTWalsheim;
`
const Answer = styled.h5`
	margin-top: 0.5rem;
	font-size: 16px;
	line-height: 24px;
	text-align: left;
	font-family: Avenir;
	font-weight: 500;
`

const FaqSection = () => (
	<Wrapper>
		<Title>Frequently Asked Questions</Title>
		<Content>
			<QASection>
				<Question>What forms of payment do you accept?</Question>
				<Answer>Thanks to the good people at Stripe, we accept all major credit cards. We also accept wire transfers and electronic checks.</Answer>
			</QASection>
			<QASection>
				<Question>How is your service different from all other B2B lead gen service out there?</Question>
				<Answer>Cup of Data uses Machine Learning and Deep Learning to identify the best leads, for you. Our A.I. calculates an Account Propensity Score (APS) which improves over time by tracking successful conversions. So it's more than just B2B lead gen, it's your own personal an automated sales coach!</Answer>
			</QASection>
			<QASection>
				<Question>Do you leverage third-party databases?</Question>
				<Answer>Absolutely. We rely on firmographic, technographic, social, and public data and in many cases, these data sources have costs and long-term commitments.</Answer>
			</QASection>
			<QASection>
				<Question>Do you integrate with CRM and Martech solutions?</Question>
				<Answer>You bet. We designed Cup of Data from the get-go to integrate with any solution.</Answer>
			</QASection>
			<QASection>
				<Question>Do you offer free trials for your service?</Question>
				<Answer>We do for a limited number of accounts and validated contacts. Cup of Data works best once our A.I. models track milestones, starting with conversions, and create challenger models to improve outcomes. If you would like a demo, you can schedule one <a href="https://www.cupofdata.com/onboard/">here</a></Answer>
			</QASection>
			<QASection>
				<Question>Do you augment account and contact lists with context?</Question>
				<Answer>Yes. If you can engage the customer with the right message, at the right time, and in the right format you will have a big advantage. Context helps accomplish that. </Answer>
			</QASection>
		</Content>
	</Wrapper>
)
export default FaqSection;