import React from 'react'
import styled from 'styled-components'
import { H2, H6 } from '../Typography'
import { Container, Row, Col } from '../Layout'
import Button from '../Button'
import { withPrefix } from 'gatsby-link'

import imageDesktop from '../../img/img-desktop.png'

const Wrapper = styled.div`
  background: #f5f7fa;
  padding-top: 50px;
`

const Title = H2.extend`
  margin-bottom: 94px;
  font-family: GTWalsheim;
  text-align: center;
  @media screen and (max-width: 576px) {
    margin-bottom: 18px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`

const FeatureContent = H6.extend`
  max-width: 380px;
  font-weight: 400;
  margin-bottom: 2rem;
  padding-left: 1rem;
  @media screen and (max-width: 576px) {
    margin-bottom: 1rem;
  }
`
const LearnMore = Button.extend`
  @media screen and (max-width: 576px) {
    display: none;
  }
`
const FeatureRow = Row.extend`
  position: relative;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap-reverse;
  }
`
const UL = styled.ul`
  padding: 0 1rem;
  list-style: none;
  @media screen and (min-width: 992px) {
    padding-bottom: 120px;
  }
  @media screen and (min-width: 1200px) {
    padding-bottom: 200px;
  }
`
const LI = styled.li`
  display: inline-flex !important;
  ::before {
    content: '\\F105';
    line-height: 25px;
  }
`
const ImgCol = Col.extend`
  position: absolute;
  @media screen and (max-width: 767px) {
    position: initial;
    height: 500px;
  }
  @media screen and (max-width: 490px) {
    height: 440px;
  }
  @media screen and (max-width: 490px) {
    height: 90vw;
  }
`
const ContentCol = Col.extend`
  margin-left: 50%;
  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`
const Img = styled.img`
  @media screen and (max-width: 997px) {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    width: initial;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
const FeaturesView = () => (
  <Wrapper>
    <Title>Features</Title>
    <Container>
      <FeatureRow>
        <ImgCol xs="12" sm="6">
          <Img src={imageDesktop} />
        </ImgCol>
        <ContentCol xs="12" sm="6">
          <UL>
            <LI className="fa">
              <FeatureContent>
                Quickly identify relevant accounts and contacts
              </FeatureContent>
            </LI>
            <LI className="fa">
              <FeatureContent>
                Improve prospect quality scores with machine learning
              </FeatureContent>
            </LI>
            <LI className="fa">
              <FeatureContent>
                Obtain insights on how to engage contacts with context
              </FeatureContent>
            </LI>
            <LI className="fa">
              <FeatureContent>
                Trigger targeted engagements using your existing Martech stack
              </FeatureContent>
            </LI>
          </UL>
          {/*<LearnMore>Learn More</LearnMore>*/}
        </ContentCol>
      </FeatureRow>
    </Container>
  </Wrapper>
)

export default FeaturesView
