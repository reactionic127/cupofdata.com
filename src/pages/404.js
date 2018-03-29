import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Container } from '../components/Layout'
import Link, { withPrefix } from 'gatsby-link'
import Button from '../components/Button'

import imageLogo from '../img/img-logo.svg'
import image404 from '../img/img-404.svg'

const Wrapper = styled.div`
  height: 100vh;
  background: url(/files/images/bk-404.svg);
  background-size: cover;
  background-position-y: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogoImg = styled.img`
  margin-top: 80px;
  width: 170px;
`

const Img404 = styled.img`
  margin-top: 100px;
  width: 430px;
`

const Topic = styled.h1`
  font-size: 30px;
  line-height: 41px;
  color: #ffffff;
  padding-top: 50px;
  font-family: Avenir;
`

const Detail = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: Avenir;
  line-height: 30px;
  max-width: 560px;
  text-align: center;
  margin: 0;
`

const BackButton = Button.extend`
  margin-top: 3rem;
  box-shadow: 2px 4px rgba(0, 0, 0, 0.1);
`

const NotFoundPage = () => (
  <Wrapper>
    <Helmet title="Page Not Found | Cup of Data" />
    <LogoImg src={imageLogo} />
    <Img404 src={image404} />
    <Topic>Page not found</Topic>
    <Detail>
      Sorry, but the page you were looking for could not be found. You can
      return to our front page, or drop us a line if you can't find what you're
      looking for.
    </Detail>
    <Link to="/">
      <BackButton>Go back to home page</BackButton>
    </Link>
  </Wrapper>
)

export default NotFoundPage
