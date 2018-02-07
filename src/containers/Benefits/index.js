import React from 'react';
import styled from 'styled-components'
import { SectionTitle, Title, SubTitle } from '../../components/Typography'
import { Container, Row, Col } from '../../components/Layout'
import { withPrefix } from 'gatsby-link'

const Wrapper = styled.div`
	padding-top: 200px;
	padding-bottom: 115px;
	text-align: center;
`

const ImgView = styled.div`
	width: 100%;
	height: 170px;
	position: relative;
	margin-bottom: 16px;
`

const Img = styled.img`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
`

const BenefitsSection = () => (
	<Wrapper>
		<SectionTitle>Benefits</SectionTitle>
		<Container>
			<Row>
				<Col xs="3">
					<ImgView>
						<Img src={withPrefix('files/images/img-sales.svg')} />
					</ImgView>
					<Title>Improve Marketing and Sales Alignment</Title>
					<SubTitle>Improve collaboration between marketing and sales with transparent metrics</SubTitle>
				</Col>
				<Col xs="3">
					<ImgView>
						<Img src={withPrefix('files/images/img-existing.svg')} />
					</ImgView>
					<Title>Create Unique Experiences with Context</Title>
					<SubTitle>Use leading questions and social references to improve trust and engagement</SubTitle>
				</Col>
				<Col xs="3">
					<ImgView>
						<Img src={withPrefix('files/images/img-shorten-sales.svg')} />
					</ImgView>
					<Title>Shorten sales cycles</Title>
					<SubTitle>Quickly identify and optimize inbound and outbound channels to improve conversion velocity</SubTitle>
				</Col>
				<Col xs="3">
					<ImgView>
						<Img src={withPrefix('files/images/img-clear-path.svg')} />
					</ImgView>
					<Title>Clearer path to ROI</Title>
					<SubTitle>Obtain clear ROI metrics to focus on best performing campaigns and provide smarter routing rules</SubTitle>
				</Col>
			</Row>
		</Container>

	</Wrapper>
)

export default BenefitsSection
