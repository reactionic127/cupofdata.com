import React from 'react';
import { Container } from '../../components/Layout'
import Button from '../../components/Button'
import { SectionTitle, SubTitle } from '../../components/Typography'
import Link, { withPrefix } from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
	background: url(/files/images/bk-automarketing.jpeg);
  background-size: 100%;
  position: relative;
  padding: 70px 0;
  @media screen and (max-width: 576px) {
		padding: 40px 30px;
	}
`

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(252,132,43,0.97);
`

const MainContainer = styled(Container)`
	position: relative;
	z-index: 1;
`

const Title = SectionTitle.extend`
	text-align: left;
	color: ${props => props.theme.automarketing.color.sectionTitle};
	margin: 1rem 0;
	@media screen and (max-width: 576px) {
		font-size: 24px;
	}
`

const Content = SubTitle.extend`
	color: ${props => props.theme.automarketing.color.content};
	margin: 2rem 0;
	@media screen and (max-width: 576px) {
		font-size: 16px;
		margin: 1rem 0;
	}
`

const RegButton = styled(Button)`
	border-radius: 25px;
	background: ${props => props.theme.automarketing.color.btnBackground};
	color: ${props => props.theme.automarketing.color.buttonText};
	font-family: Avenir;
	&:focus {
		box-shadow: none;
	}
`

const AutomatedMarketingSection = (props) => (
	<Wrapper>
		<Overlay />
		<MainContainer>
			<Title {...props}>Let us help you get started. On Us!</Title>
			<Content>Talk is cheap. Let us prove our worth. Register for some free leads today, no strings attached!</Content>
			<Link to="/onboard"><RegButton className="py-0 px-5 border-0">Register Now</RegButton></Link>
		</MainContainer>
	</Wrapper>
)

export default AutomatedMarketingSection
