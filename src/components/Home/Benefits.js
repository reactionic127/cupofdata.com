import React from 'react'
import styled from 'styled-components'
import { H2, H5, H6 } from '../Typography'
import { Container, Row, Col } from '../Layout'
import { withPrefix } from 'gatsby-link'

import imageSales from '../../img/img-sales.svg'
import imageExisting from '../../img/img-existing.svg'
import imageShortenSales from '../../img/img-shorten-sales.svg'
import imageClearPath from '../../img/img-clear-path.svg'

const Wrapper = styled.div`
  padding-top: 200px;
  padding-bottom: 115px;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding-top: 150px;
  }
  @media screen and (max-width: 576px) {
    padding-top: 80px;
  }
`

const ImgView = styled.div`
  width: 100%;
  height: 140px;
  position: relative;
  margin-bottom: 16px;

  @media screen and (max-width: 576px) {
    height: 110px;
  }
`

const BannerCol = Col.extend`
  @media screen and (max-width: 576px) {
    width: 80%;
    margin: 0 auto;
  }
`

const BenefitsSectionTitle = H2.extend`
  text-align: center;
  @media screen and (max-width: 576px) {
    margin-top: 18px;
    margin-bottom: 18px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }
`

const Header = H6.extend`
  margin-bottom: 10px;
`

const Description = H6.extend`
  font-weight: 500;
`

const iconStyle = {
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
}

const BenefitsSection = () => (
  <Wrapper>
    <BenefitsSectionTitle>Benefits</BenefitsSectionTitle>
    <Container>
      <Row>
        <BannerCol xs="12" sm="6" md="3">
          <ImgView>
            <img src={imageSales} style={iconStyle} width="50px" />
          </ImgView>
          <Header>Improve Marketing and Sales Alignment</Header>
          <Description>
            Improve collaboration between marketing and sales with transparent
            metrics
          </Description>
        </BannerCol>
        <BannerCol xs="12" sm="6" md="3">
          <ImgView>
            <img src={imageExisting} style={iconStyle} width="50px" />
          </ImgView>
          <Header>Create Unique Experiences with Context</Header>
          <Description>
            Use leading questions and social references to improve trust and
            engagement
          </Description>
        </BannerCol>
        <BannerCol xs="12" sm="6" md="3">
          <ImgView>
            <img src={imageShortenSales} style={iconStyle} width="50px" />
          </ImgView>
          <Header>Shorten sales cycles</Header>
          <Description>
            Quickly identify and optimize inbound and outbound channels to
            improve conversion velocity
          </Description>
        </BannerCol>
        <BannerCol xs="12" sm="6" md="3">
          <ImgView>
            <img src={imageClearPath} style={iconStyle} width="50px" />
          </ImgView>
          <Header>Clearer path to ROI</Header>
          <Description>
            Obtain clear ROI metrics to focus on best performing campaigns and
            provide smarter routing rules
          </Description>
        </BannerCol>
      </Row>
    </Container>
  </Wrapper>
)

export default BenefitsSection
