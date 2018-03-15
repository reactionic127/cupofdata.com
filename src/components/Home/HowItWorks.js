import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { H2, H6 } from '../Typography'
import { Container, Row, Col } from '../Layout'

const Wrapper = styled.div`
  position: relative;
  padding: 3rem 0;
  background-color: #fff;
  @media (min-width: 576px) {
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 10rem solid #f5f7fa;
    }
  }
`
const Title = H2.extend`
  margin-bottom: 1em;
  font-family: GTWalsheim;
  text-align: center;
  @media screen and (max-width: 576px) {
    margin-bottom: 18px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`
const VideoCol = Col.extend`
  margin: 0 auto;
`
const ResponsiveVideo = styled.div`
  position: relative;
  padding-bottom: 51.5%;
  padding-top: 35px;
  height: 0;
  background-color: #fff;
  box-shadow: 3px 4px 26px -2px rgba(153, 153, 153, 1);
  overflow: hidden;
  z-index: 1;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
const FeaturesView = () => (
  <Wrapper>
    <Helmet>
      <script
        type="text/javascript"
        defer
        src="https://extend.vimeocdn.com/ga/67293230.js"
      />
    </Helmet>
    <Title>See how it works</Title>
    <Container>
      <Row>
        <VideoCol sm={10} md={8}>
          <ResponsiveVideo>
            <iframe
              src="https://player.vimeo.com/video/260070240"
              width="640"
              height="360"
              frameBorder="0"
              allowFullScreen
            />
          </ResponsiveVideo>
        </VideoCol>
      </Row>
    </Container>
  </Wrapper>
)

export default FeaturesView
