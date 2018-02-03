import React from 'react';
import styled from 'styled-components'
import { SectionTitle, Title, SubTitle } from '../../components/Typography'
import { Container, Row, Col } from '../../components/Global'
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
					<Title>Improve Salse alignment</Title>
					<SubTitle>Identify and send Sales Qualified Lead(SQLs) directly to CRMs</SubTitle>
				</Col>
				<Col xs="3">
					<ImgView>
						<Img src={withPrefix('files/images/img-existing.svg')} />
					</ImgView>
					<Title>Integrate with existing stack</Title>
					<SubTitle>Track progress and update closed sales leads to improve AI model</SubTitle>
				</Col>
				<Col xs="3">
					<ImgView>
						<Img src={withPrefix('files/images/img-shorten-sales.svg')} />
					</ImgView>
					<Title>Shorten sales cycles</Title>
					<SubTitle>Quickly identify inbound marketing channels to improve lead quality</SubTitle>
				</Col>
				<Col xs="3">
					<ImgView>
						<Img src={withPrefix('files/images/img-clear-path.svg')} />
					</ImgView>
					<Title>Clearer path to ROI</Title>
					<SubTitle>Obtain ROI indicators to focus on best performing campaigns</SubTitle>
				</Col>
			</Row>
		</Container>
		
	</Wrapper>
)
export default BenefitsSection