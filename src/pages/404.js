import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Button from '../components/Button'
import LazyLoadImage from 'react-lazy-load-image-component'

import imgLogo from '../img/img-logo.svg'
import img404 from '../img/img-404.svg'
import background404 from '../img/bk-404.svg'

const Wrapper = styled.div`
  height: 100vh;
  background: url(${background404});
  background-size: cover;
  background-position-y: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const logoStyle = {
  marginTop: '80px',
}

const imgStyle = {
  marginTop: '100px',
}

const NotFoundPage = () => (
  <Wrapper>
    <Helmet title="Page Not Found | Cup of Data" />
    {typeof window !== 'undefined' && (
      <div>
        <LazyLoadImage
          effect="blur"
          src={imgLogo}
          width="170px"
          style={logoStyle}
        />
        <LazyLoadImage
          effect="blur"
          src={img404}
          width="430px"
          style={imgStyle}
        />
      </div>
    )}
    <Topic>Page not found</Topic>
    <Detail>
      Sorry, but the page you were looking for could not be found. You can
      return to our front page, or drop us a line if you can not find what you
      are looking for.
    </Detail>
    <Link to="/">
      <BackButton>Go back to home page</BackButton>
    </Link>
  </Wrapper>
)

export default NotFoundPage
