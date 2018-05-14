import React from 'react'
import styled from 'styled-components'
import { H2, H6 } from '../Typography'
import { Container, Row, Col } from '../Layout'

//import searchFilter from '../../img/features_filters.svg'
import contactList from '../../img/contact_lists.svg'

const Wrapper = styled.div`
  background: #f5f7fa;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Content = Container.extend`
  margin-top: 60px;
  column-count: 1;
  -webkit-column-count: 1;
  -moz-column-count: 1;
  @media screen and (max-width: 576px) {
    column-count: 1;
    -webkit-column-count: 1;
    -moz-column-count: 1;
    padding: 0 2rem;
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

const FeatureRow = Row.extend`
  position: relative;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap-reverse;
  }
`

const ImgCol = Col.extend`
  position: absolute;
  left: -100px;
  margin-bottom: 0px;
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

const FeatureTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
`

const StepTwo = H2.extend`
  color: #000000;
  line-height: normal;
  align: left;
  margin-top: 0px;
`

const StepTwoImage = styled.img`
  width: 100%;
  height: auto;
`

const FeaturesTwo = () => {
  return (
    <Wrapper>
      <Content>
        <FeatureRow>
          <ImgCol xs="12" sm="6">
            <StepTwoImage src={contactList} />
          </ImgCol>
          <ContentCol xs="12" sm="6">
            <StepTwo>Step Two:</StepTwo>
            <FeatureTitle>Build Contact Lists</FeatureTitle>
            <FeatureContent>
              Save time by avoiding dead phone numbers and bounced emails. We
              obtains accurate contact information for your leads with the
              combination of trusted third party and public data sources and
              verifies each and every contact to achieve a 95% or better contact
              accuracy rate.
            </FeatureContent>
          </ContentCol>
        </FeatureRow>
      </Content>
    </Wrapper>
  )
}

export default FeaturesTwo
