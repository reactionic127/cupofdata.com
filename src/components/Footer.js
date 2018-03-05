import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from './Layout'
import { P } from './Typography'
import Link from 'gatsby-link'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.footer.color.background};
  padding: 1rem;
`

const Text = P.extend`
  color: ${({ theme }) => theme.footer.color.text};
  @media screen and (max-width: 576px) {
    text-align: center;
    padding: 0.75rem 0;
  }
`

const CustomLink = styled(Link)`
  text-decoration: none;
`

const Footer = props => (
  <Wrapper>
    <Container>
      <Row>
        <Col xs="12" sm="8">
          <Text>
            Copyright © {new Date().getFullYear()} 3Blades LLC - Made with love
            in Atlanta, GA.
          </Text>
        </Col>
        {props.menus.footer.map(item => (
          <Col xs="12" sm="2" key={item.title}>
            <CustomLink to={item.to}>
              <Text>{item.title}</Text>
            </CustomLink>
          </Col>
        ))}
      </Row>
    </Container>
  </Wrapper>
)

export default Footer

export const footerFragment = graphql`
  fragment FooterSettingsFragment on RootQueryType {
    footerSettings: siteSettings {
      menus {
        footer {
          title
          to
        }
      }
    }
  }
`
