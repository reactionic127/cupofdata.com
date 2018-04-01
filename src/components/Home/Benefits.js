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

const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
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
    <H2>Benefits</H2>
    <Container>
      <Row>
        <BannerCol xs="12" sm="6" md="3">
          <ImgView>
            <Img src={imageSales} />
          </ImgView>
          <Title>Improve Marketing and Sales Alignment</Title>
          <SubTitle>
            Improve collaboration between marketing and sales with transparent
            metrics
          </SubTitle>
        </BannerCol>
        <BannerCol xs="12" sm="6" md="3">
          <ImgView>
            <Img src={imageExisting} />
          </ImgView>
          <Title>Create Unique Experiences with Context</Title>
          <SubTitle>
            Use leading questions and social references to improve trust and
            engagement
          </SubTitle>
        </BannerCol>
        <BannerCol xs="12" sm="6" md="3">
          <ImgView>
            <Img src={imageShortenSales} />
          </ImgView>
          <Title>Shorten sales cycles</Title>
          <SubTitle>
            Quickly identify and optimize inbound and outbound channels to
            improve conversion velocity
          </SubTitle>
        </BannerCol>
        <BannerCol xs="12" sm="6" md="3">
          <ImgView>
            <Img src={imageClearPath} />
          </ImgView>
          <Title>Clearer path to ROI</Title>
          <SubTitle>
            Obtain clear ROI metrics to focus on best performing campaigns and
            provide smarter routing rules
          </SubTitle>
        </BannerCol>
      </Row>
    </Container>
  </Wrapper>
)

export default BenefitsSection
