import React from 'react'
import { Container } from '../Layout'
import { H6 } from '../Typography'
import styled from 'styled-components'

import bannerImage from '../../img/background.svg'
import bannerImageMobile from '../../img/mobile-background_blue.svg'
import cupAndCards from '../../img/img-cup_and_cards.svg'
//import cupAndCardsMobile from '../../img/img-cup_and_cards-mobile.svg'

const Wrapper = styled.div`
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: left top;
  color: ${props => props.theme.banner.color.text};
  position: relative;
  margin-top: 90px;
  height: 452px;
  @media screen and (max-width: 767px) {
    height: 750px;
  }
  @media screen and (max-width: 576px) {
    background-image: url(${bannerImageMobile});
    margin-top: 60px;
    height: 340px;
  }
`

const BannerContainer = Container.extend`
  padding-top: 144px;
  height: 100%;
  position: relative;
`

const ImgCards = styled.img`
  width: auto;
  height: auto;
  @media screen and (max-width: 767px) {
    width: 80%;
    height: auto;
    margin-bottom: 0px;
  }
  @media screen and (max-width: 576px) {
    width: 80%;
    height: auto;
  }
`

const Header = H6.extend`
  color: ${props => props.theme.banner.color.text};
  position: absolute;
  right: 0rem;
  top: 15rem;
  font-size: 24px;
  @media screen and (max-width: 576px) {
    font-size: 18px;
    margin-left: 2rem;
    margin-right: 2rem;
    top: 4rem;
  }
`

const BannerSection = () => {
  return (
    <Wrapper>
      <BannerContainer>
        <Header>
          Get validated emails and phone numbers in three easy steps!
        </Header>
        <ImgCards src={cupAndCards} />
      </BannerContainer>
    </Wrapper>
  )
}

export default BannerSection
