import React from 'react'
import { Container, Row, Col } from '../../components/Global'
import styled from 'styled-components';
import Button from '../../components/Button'
import Link, { withPrefix } from 'gatsby-link'

const Wrapper = styled.div`
	background-image: url(/files/images/background.svg);
  background-size: calc(100% + 1px);
  color: ${props => props.theme.banner.color.text};
  position: relative;
  background-position: right bottom;
  padding-top: 94px;
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
const BackImg = styled.img`
  position: absolute;
  bottom: -1px;  right: 0;
  width: 140px;
`

const BannerSection = (props) => (
	<Wrapper>
		<BackImg src="/files/images/img-backborder.svg" />
		<BannerContainer>
			<Main>
				<Col sm="6">
					<img src="/files/images/img-left.svg" width="80%" />
					<BottomText>It takes an eternity to do prospecting...</BottomText>
				</Col>
				<Col sm="6">
					<Title>With Cup of Data, you get better B2B leads, faster!</Title>
					<img src="/files/images/img-right.svg" width="100%"/>
				</Col>
			</Main>
{/*			<BannerView>
				<Content>Duis aute irure dolor in reprehenderit in voluptate velid esse cillum dolore eu fugiat nulla pariatur</Content>
				<Button>Rigister Now</Button>
			</BannerView>*/}
		</BannerContainer>
	</Wrapper>
)
export default BannerSection
