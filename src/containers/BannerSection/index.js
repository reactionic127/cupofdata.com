import React, { div } from 'react'
import { Container, Row, Col } from '../../components/Layout'
import styled from 'styled-components'
import Slider from 'react-slick'
import Button from '../../components/Button'
import Link, { withPrefix } from 'gatsby-link'

const LandingMode = styled.div`
	background-image: url(/files/images/background.svg);
  background-size: calc(100% + 1px);
  color: ${props => props.theme.banner.color.text};
  position: relative;
  background-position: right bottom;
  padding-top: 94px;
  @media screen and (max-width: 576px) {
  	display: none;
  }
`

const BannerView = styled.div`
	position: relative;
  padding-top: 130px;
  padding-bottom: 230px;
`

const Title = styled.h1`
	font-size: 36px;
	line-height: 42px;
	font-family: GTWalsheim;
	margin: 0 0 60px;
`

const BannerContainer = styled(Container)`
	height: 100%;
  display: flex;
  flex-direction: column;
`

const Main = styled(Row)`
	padding-top: 40px;
	flex: 1;
`

const BottomText = styled(Title)`
  margin-top: 10px;
  font-size: 24px;
  line-height: 28px;
`
const MobileTitle = Title.extend`
	margin: 10px 0;
	font-size: 20px;
  line-height: 23px;
  color: #ffffff;
`

const BackImg = styled.img`
  position: absolute;
  bottom: -1px;  right: 0;
  width: 140px;
`
const Slick1 = styled.div`
	background: url(/files/images/bk-slick1.svg);
	padding: 100px 20px 70px 20px;
	height: calc(100vh - 170px);
	@media screen and (max-width: 320px) {
		padding: 70px 20px;
		height: calc(100vh - 140px);
	}
`
const Slick2 = styled.div`
	background: url(/files/images/bk-slick2.svg);
	padding: 100px 20px 70px 20px;
	height: calc(100vh - 170px);
	background-position: 100% 100%;
	background-size: cover;
	background-repeat: none;
	@media screen and (max-width: 320px) {
		padding: 70px 20px;
		height: calc(100vh - 140px);
	}
`
const Slick2Img = styled.img`
	width: 80px;
	@media screen and (max-width: 320px) {
		width: 70px;
	}
`
const BannerSection = (props) => (
	<div>
		<LandingMode>
			<BackImg src="/files/images/img-backborder.svg" />
			<BannerContainer>
				<Main>
					<Col xs="12" sm="6">
						<img src="/files/images/img-left.svg" width="80%" />
						<BottomText>It takes an eternity to do prospecting...</BottomText>
					</Col>
					<Col xs="12" sm="6">
						<Title>With Cup of Data, you get better B2B leads, faster!</Title>
						<img src="/files/images/img-right.svg" width="100%"/>
					</Col>
				</Main>
			</BannerContainer>
		</LandingMode>
		<Slider
			dots
			speed={500}
			slidesToShow={1}
      slidesToScroll={1}
		>
			<div>
				<Slick1>
					<MobileTitle>Before cup of data</MobileTitle>
					<img src="/files/images/img-slick1.svg" width="100%" />
					
				</Slick1>
			</div>
			<div>
				<Slick2>
					<MobileTitle>With Cup of Data, you get better B2B leads, faster!</MobileTitle>
					<img src="/files/images/img-slick2.svg" width="72%"/>
				</Slick2>
			</div>
			
		</Slider>
	</div>
)

export default BannerSection
