import React from 'react';
import styled from 'styled-components'
import { H5, H6, SectionTitle } from '../../components/Typography'
import { Container, Row, Col } from '../../components/Layout'
import { withPrefix } from 'gatsby-link'

const Wrapper = styled.div`
	padding-top: 200px;
	padding-bottom: 115px;
	text-align: center;
	@media screen and (max-width: 576px) {
		padding-top: 100px;
	}
`

const ImgView = styled.div`
	width: 100%;
	height: 170px;
	position: relative;
	margin-bottom: 16px;

	@media screen and (max-width: 576px) {
		height: 110px;
	}
`

const Img = styled.img`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
`
const BannerCol = Col.extend`
	@media screen and (max-width: 576px) {
		width: 80%;
		margin: 0 auto;
	}
`
const Title = H5.extend`
	font-weight: 600;
`
const SubTitle = H6.extend`
	font-weight: 500;
`

const BenefitsSection = () => (
	<Wrapper>
		<SectionTitle>Benefits</SectionTitle>
		<Container>
			<Row>
				<BannerCol xs="12" sm="6" md="3">
					<ImgView>
						<Img src={withPrefix('files/images/img-sales.svg')} />
					</ImgView>
					<Title>Improve Marketing and Sales Alignment</Title>
					<SubTitle>Improve collaboration between marketing and sales with transparent metrics</SubTitle>
				</BannerCol>
				<BannerCol xs="12" sm="6" md="3">
					<ImgView>
						<Img src={withPrefix('files/images/img-existing.svg')} />
					</ImgView>
					<Title>Create Unique Experiences with Context</Title>
					<SubTitle>Use leading questions and social references to improve trust and engagement</SubTitle>
				</BannerCol>
				<BannerCol xs="12" sm="6" md="3">
					<ImgView>
						<Img src={withPrefix('files/images/img-shorten-sales.svg')} />
					</ImgView>
					<Title>Shorten sales cycles</Title>
					<SubTitle>Quickly identify and optimize inbound and outbound channels to improve conversion velocity</SubTitle>
				</BannerCol>
				<BannerCol xs="12" sm="6" md="3">
					<ImgView>
						<Img src={withPrefix('files/images/img-clear-path.svg')} />
					</ImgView>
					<Title>Clearer path to ROI</Title>
					<SubTitle>Obtain clear ROI metrics to focus on best performing campaigns and provide smarter routing rules</SubTitle>
				</BannerCol>
			</Row>
		</Container>

	</Wrapper>
)

export default BenefitsSection
