import React, { div } from 'react'
import { Container, Row, Col } from '../../../components/Layout'
import { H3, H6 } from '../../../components/Typography'
import styled from 'styled-components'
import Slider from 'react-slick'
import Button from '../../../components/Button'
import Link, { withPrefix } from 'gatsby-link'

const Wrapper = styled.div`
	background-image: url(/files/images/background.svg);
  background-size: cover;
  color: ${props => props.theme.banner.color.text};
  position: relative;
  background-position: left top;
  margin-top: 90px;
  height: 600px;
`

const BannerView = styled.div`
	position: relative;
  padding-top: 130px;
  padding-bottom: 230px;
`

const Header = H3.extend`
	font-family: GTWalsheim;
`
const Title = H6.extend`
	color: #000000;
	font-weight: 400;
	max-width: 560px;
`
const BannerContainer = Container.extend`
	padding-top: 144px;
	height: 100%;
	position: relative;
`

const BackImg = styled.img`
  position: absolute;
  bottom: -1px;  right: 0;
  width: 140px;
`
const PersonaContainer = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	display: flex;
	width: 570px;
	justify-content: space-between;
`
const Personal = styled.div`
	display: flex;
	flex: 1;
`
const BannerSection = (props) => (
	<Wrapper>
		<BannerContainer>
			<Header>
				With Cup of Data, you get better leads
			</Header>
			<Title>
				Quickly identify and optimize inbound and outbound channels to improve conversion velocity
			</Title>
			<PersonaContainer>
				<Personal>
					<img src={withPrefix('/files/images/img-person1.svg')} />
				</Personal>
				<Personal>
					<img src={withPrefix('/files/images/img-person2.svg')} />
				</Personal>
				<Personal>
					<img src={withPrefix('/files/images/img-person3.svg')} />
					<img src={withPrefix('/files/images/img-person4.svg')} />
				</Personal>
			</PersonaContainer>
		</BannerContainer>
	</Wrapper>
)

export default BannerSection
