import React from 'react'
import styled from 'styled-components'
import Link, { withPrefix } from 'gatsby-link'
import { Container, Row, Col } from './Layout'
import { H5, H6 } from './Typography'
import { LINKEDIN_URL, FACEBOOK_URL, TWITTER_URL } from '../config/constants'

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
const ContactSection = ({ company, menus, title }) => (
  <Wrapper>
    <Container>
      <Row>
        <MainCol xs="12" sm="5">
          <img src={withPrefix('/files/images/img-logo.svg')} width="120" />
          <ContactContent>
            Cup of Data’s mission is turbocharge growth at B2B SaaS companies
            using A.I. By alleviating businesses from the manual, repetitive
            tasks associated with obtaining marketing qualified leads, marketers
            and sales professionals can focus on creating unique experiences
            with their customers and partners.
          </ContactContent>
        </MainCol>
        <SpCol xs="4" sm="3">
          <ContactTitle>SITEMAP</ContactTitle>
          <Ul>
            {menus.contact.map(item => (
              <Li key={item.title}>
                <ContactLink to={item.to}>{item.title}</ContactLink>
              </Li>
            ))}
          </Ul>
        </SpCol>
        <SpCol xs="8" sm="4">
          <ContactTitle>CONTACT US</ContactTitle>
          <ContactContent>
            {title}
            <br />
            {company.location.streetAddress}
            <br />
            {company.location.city}, {company.location.state}{' '}
            {company.location.zip}
          </ContactContent>
          <ShareIcon>
            <A href={company.social.facebook}>
              <Icon className="fab fa-facebook-square fa-2x" />
            </A>
            <A href={company.social.twitter}>
              <Icon className="fab fa-twitter fa-2x" />
            </A>
            <A href={company.social.linkedin}>
              <Icon className="fab fa-linkedin fa-2x" />
            </A>
          </ShareIcon>
        </SpCol>
      </Row>
    </Container>
  </Wrapper>
)

export default ContactSection

export const contactFragment = graphql`
  fragment ContactSettingsFragment on RootQueryType {
    contactSettings: siteSettings {
      company {
        location {
          streetAddress
          city
          state
          zip
        }
        social {
          linkedin
          facebook
          twitter
        }
      }
      menus {
        contact {
          title
          to
        }
      }
    }
  }
`
