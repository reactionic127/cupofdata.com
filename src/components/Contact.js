import React from 'react'
import styled from 'styled-components'
import Link, { withPrefix } from 'gatsby-link'
import { Container, Row, Col } from './Layout'
import { H3, H6, Body } from './Typography'

import imgLogo from '../img/img-logo.svg'

const Wrapper = styled.div`
  padding-top: 85px;
  padding-bottom: 130px;
  background-color: ${props => props.theme.contact.color.background};
  color: ${({ theme }) => theme.contact.color.text};
  @media screen and (max-width: 576px) {
    padding: 3rem 0;
  }
`

const ContactTitle = H3.extend`
  font-weight: 600;
  color: ${({ theme }) => theme.contact.color.text};
  margin-top: 33px;
`

const ContactContent = Body.extend`
  font-weight: normal;
  color: ${({ theme }) => theme.contact.color.text};
  margin-top: 2rem;
  line-height: 33px;
`

const ContactLink = styled(Link)`
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

export default function ContactSection({ data, title }) {
  const contactInfo = data.filter(item => {
    return item.node.frontmatter.contentType === 'contact'
  })
  const { mission } = contactInfo[0].node.frontmatter
  return (
    <Wrapper>
      <Container>
        <Row>
          <MainCol xs="12" sm="5">
            <img src={imgLogo} width="120" />
            <ContactContent>{mission}</ContactContent>
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
                <ContactLink to="/company">Company</ContactLink>
              </Li>
              <Li>
                <ContactLink to="/blog">Blog</ContactLink>
              </Li>
            </Ul>
          </SpCol>
          <SpCol xs="8" sm="4">
            <ContactTitle>CONTACT US</ContactTitle>
            <ContactContent>
              {title}
              <br />3423 Piedmont Rd NE<br />
              Atlanta, GA 30305
            </ContactContent>
            <ShareIcon>
              <A href="https://www.facebook.com/Cup-of-Data-143732069623215/">
                <Icon className="fab fa-facebook-square fa-2x" />
              </A>
              <A href="https://twitter.com/cupofdata">
                <Icon className="fab fa-twitter fa-2x" />
              </A>
              <A href="https://www.linkedin.com/company/11433034/">
                <Icon className="fab fa-linkedin fa-2x" />
              </A>
            </ShareIcon>
          </SpCol>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default ContactSection
