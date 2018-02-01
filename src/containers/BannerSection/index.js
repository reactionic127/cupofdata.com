import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components';
import NavContainer from '../../components/Navbar'
import Button from '../../components/Button'

const Wrapper = styled.div`
	background-image: url(/files/images/background.png);
  background-position: center;
  background-size: cover;
  color: ${props => props.theme.color.white};
  position: relative;
`
const BannerView = styled.div`
	position: relative;
  padding-top: 130px;
  padding-bottom: 230px;
  max-width: 580px;
`
const Title = styled.h1`
	font-size: 64px;
  line-height: 75px;
`
const Content = styled.p`
	font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.6px;
  margin-bottom: 35px;
`
const BannerSection = (props) => (
	<Wrapper>
		<Container>
			<NavContainer {...props}/>
			<BannerView className="pa-5">
				<Title>Sip of your future</Title>
				<Content>Duis aute irure dolor in reprehenderit in voluptate velid esse cillum dolore eu fugiat nulla pariatur</Content>
				<Button>Rigister Now</Button>
			</BannerView>
		</Container>
	</Wrapper>
)
export default BannerSection	