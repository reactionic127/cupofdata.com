import React from 'react';
import { Container } from '../../components/Global'
import Button from '../../components/Button'
import { SectionTitle, SubTitle } from '../../components/Typography'
import { withPrefix} from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
	background: url(/files/images/bk-automarketing.jpeg);
  background-size: 100%;
  position: relative;
  padding: 70px 0;
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
`
const Content = SubTitle.extend`
	color: ${props => props.theme.automarketing.color.content};
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
			<Title {...props}>Automate marketing</Title>
			<Content>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Content>
			<RegButton className="py-0 px-5 border-0">Register Now</RegButton>
		</MainContainer>
	</Wrapper>
)
export default AutomatedMarketingSection