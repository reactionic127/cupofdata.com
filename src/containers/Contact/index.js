import React from 'react'
import styled from 'styled-components'
import Link, { withPrefix } from 'gatsby-link'
import { Container, Row, Col } from '../../components/Layout'
import { H5, H6 } from '../../components/Typography'
import { LINKEDIN_URL, FACEBOOK_URL, TWITTER_URL } from '../../config/constants'

const Wrapper = styled.div`
  padding-top: 85px;
  padding-bottom: 130px;
  background-color: ${props => props.theme.contact.color.background};
  color: ${({ theme }) => theme.contact.color.text};
  @media screen and (max-width: 576px) {
    padding: 3rem 0;
  }
`

const ContactTitle = H5.extend`
  font-weight: 600;
  color: ${({ theme }) => theme.contact.color.text};
  margin-top: 33px;
`

const ContactContent = H6.extend`
  font-weight: normal;
  margin-top: 2rem;
  line-height: 33px;
`

const ContactLink = styled(Link)`
  font-family: Avenir;
  color: ${({ theme }) => theme.contact.color.text};
  text-decoration: none;
  line-height: 2rem;
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`

const Li = styled.li`
  margin-top: 1rem;
`

const Icon = styled.i`
  opacity: 0.5;
  margin-right: 2rem;
`

const ShareIcon = styled.div`
  margin-top: 2rem;
  line-height: 3rem;
`
const SpCol = Col.extend`
  @media screen and (max-width: 576px) {
    padding: 0 2rem;
  }
`
const MainCol = SpCol.extend`
  @media screen and (max-width: 576px) {
    text-align: center;
  }
`
const A = styled.a`
  color: #ffffff;
`
const ContactSection = () => (
  <Wrapper>
    <Container>
      <Row>
        <MainCol xs="12" sm="5">
          <img src={withPrefix('/files/images/img-logo.svg')} width="120" />
          <ContactContent>
            Cup of Data’s mission is to turbocharge growth at SaaS B2B companies
            with amazing sales qualified leads. By streamlining the manual,
            repetitive tasks traditionally associated with B2B prospecting,
            marketers and sales pros have more time to spend enriching
            experiences with their customers.
          </ContactContent>
        </MainCol>
        <SpCol xs="4" sm="3">
          <ContactTitle>SITEMAP</ContactTitle>
          <Ul>
            <Li>
              <ContactLink to="/">Home</ContactLink>
            </Li>
            <Li>
              <ContactLink to="/pricing">Pricing</ContactLink>
            </Li>
            <Li>
              <ContactLink to="/about">Company</ContactLink>
            </Li>
            <Li>
              <ContactLink to="/blog">Blog</ContactLink>
            </Li>
          </Ul>
        </SpCol>
        <SpCol xs="8" sm="4">
          <ContactTitle>CONTACT US</ContactTitle>
          <ContactContent>
            Cup of Data<br />3423 Piedmont Rd NE<br />Atlanta, GA 30305
          </ContactContent>
          <ShareIcon>
            <A href={FACEBOOK_URL}>
              <Icon className="fab fa-facebook-square fa-2x" />
            </A>
            <A href={TWITTER_URL}>
              <Icon className="fab fa-twitter fa-2x" />
            </A>
            <A href={LINKEDIN_URL}>
              <Icon className="fab fa-linkedin fa-2x" />
            </A>
          </ShareIcon>
        </SpCol>
      </Row>
    </Container>
  </Wrapper>
)

export default ContactSection
