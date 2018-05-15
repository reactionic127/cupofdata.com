import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from './Layout'
import { P } from './Typography'

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

const SiteMap = P.extend`
  font-weight: normal;
  color: ${({ theme }) => theme.contact.color.text};
  margin-top: 2rem;
  margin-bottom: 2rem;
  line-height: 2rem;
`

const ContactUs = P.extend`
  font-weight: normal;
  color: ${({ theme }) => theme.contact.color.text};
  margin-top: 2rem;
  line-height: 33px;
`

const Mission = P.extend`
  font-weight: normal;
  color: ${({ theme }) => theme.contact.color.text};
  margin-top: 2rem;
`

const Address = P.extend`
  font-weight: normal;
  color: ${({ theme }) => theme.contact.color.text};
  margin-top: 2rem;
`

const SiteMapLink = styled(Link)`
  color: ${({ theme }) => theme.contact.color.text};
  text-decoration: none;
  line-height: 2rem;
  @media screen and (max-width: 576px) {
    ine-height: 1rem;
  }
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`

const Li = styled.li`
  margin-top: 1rem;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    line-height: 20px;
  }
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
    text-align: center;
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

export default function ContactSection({ data }) {
  const contactInfo = data.filter(item => {
    return item.node.frontmatter.contentType === 'contact'
  })
  const { mission } = contactInfo[0].node.frontmatter
  return (
    <Wrapper>
      <Container>
        <Row>
          <MainCol xs="12" sm="5">
            {typeof window !== 'undefined' && (
              <LazyLoadImage effect="blur" src={imgLogo} width="120" />
            )}
            <Mission>{mission}</Mission>
          </MainCol>
          <SpCol xs="6" sm="3">
            <SiteMap>SITEMAP</SiteMap>
            <Ul>
              <Li>
                <SiteMapLink to="/">Home</SiteMapLink>
              </Li>
              <Li>
                <SiteMapLink to="/features">Features</SiteMapLink>
              </Li>
              <Li>
                <SiteMapLink to="/pricing">Pricing</SiteMapLink>
              </Li>
              <Li>
                <SiteMapLink to="/about">Company</SiteMapLink>
              </Li>
              <Li>
                <SiteMapLink to="/blog">Blog</SiteMapLink>
              </Li>
            </Ul>
          </SpCol>
          <SpCol xs="6" sm="3">
            <ContactUs>CONTACT US</ContactUs>
            <Address>
              Cup of Data
              <br />3423 Piedmont Rd NE<br />
              Atlanta, GA 30305
            </Address>
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

ContactSection.propTypes = {
  data: PropTypes.array,
}
