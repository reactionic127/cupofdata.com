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
				<Question>What is the maximum number virtual servers allowed?</Question>
				<Answer>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Answer>
			</QASection>
			<QASection>
				<Question>Do you accept paypal?</Question>
				<Answer>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Answer>
			</QASection>
			<QASection>
				<Question>Is the amount refundable?</Question>
				<Answer>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Answer>
			</QASection>
			<QASection>
				<Question>Lorem ipsum dolor sit amet consectetur adipiscing?</Question>
				<Answer>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Answer>
			</QASection>
			<QASection>
				<Question>Do you accept paypal?</Question>
				<Answer>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Answer>
			</QASection>
			<QASection>
				<Question>What is the maximum number virtual servers allowed?</Question>
				<Answer>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Answer>
			</QASection>
			<QASection>
				<Question>Lorem ipsum dolor sit amet consectetur adipiscing?</Question>
				<Answer>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Answer>
			</QASection>
			<QASection>
				<Question>Is the amount refundable?</Question>
				<Answer>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Answer>
			</QASection>
		</Content>
	</Wrapper>
)
export default FaqSection;