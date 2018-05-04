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

const Footer = () => (
  <Wrapper>
    <Container>
      <Row>
        <Col xs="12" sm="8">
          <Text>
            Copyright © {new Date().getFullYear()} 3Blades LLC - Made with love
            in Atlanta, GA.
          </Text>
        </Col>
        <Col xs="12" sm="2">
          <CustomLink to="/privacy">
            <Text>Privacy Policy</Text>
          </CustomLink>
        </Col>
        <Col xs="12" sm="2">
          <CustomLink to="/terms">
            <Text>Terms of Use</Text>
          </CustomLink>
        </Col>
      </Row>
    </Container>
  </Wrapper>
)

export default Footer
