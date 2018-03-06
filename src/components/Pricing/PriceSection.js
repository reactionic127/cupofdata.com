import React from 'react'
import styled from 'styled-components'
import { H1, H5, P, Small } from '../Typography'
import { Container, Row, Col } from '../Layout'
import { OutlineRadioButton } from '../Button'
import PriceCard from '../PriceCard'

const PriceSection = styled.div`
  padding: 90px 0;
`
const PriceTitle = H1.extend`
  margin-top: 3rem;
  @media screen and (max-width: 576px) {
    font-size: 24px;
  }
`
const NoteText = H5.extend`
  font-weight: 400;
`
const PlanGroup = styled.div`
  padding: 2rem 0 0;
  margin-top: 0.5rem;
  text-align: center;
`
const Discount = Small.extend`
  color: #ff842b;
  margin-left: 0.5rem;
  letter-spacing: 0;
`
const Announcment = P.extend`
  padding: 0.5rem 1rem;
  background: #d7fce5;
  display: inline;
  color: #1ebb63;
  border-radius: 1rem;
`
export default class PlanSections extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      plan: 'monthly',
    }
  }
  render() {
    return (
      <PriceSection>
        <Container>
          <PriceTitle>
            Turbocharge your SaaS B2B sales with machine learning.
          </PriceTitle>
          <NoteText>
            Introductory offer! Get 100 targeted and validated B2B leads. No
            credit card required.*
          </NoteText>
          <PlanGroup>
            <Announcment>GET 2 MONTHS FREE WITH ANNUAL PLAN</Announcment>
          </PlanGroup>
          <Row>
            <Col sm="4">
              <PriceCard
                title="STARTER"
                price={749}
                validatedContacts={500}
                machineNumber={5}
                runtime={420}
                tryPath="/onboard"
              />
            </Col>
            <Col sm="4">
              <PriceCard
                title="PRO"
                price={1499}
                validatedContacts={1100}
                machineNumber={10}
                runtime={640}
                tryPath="/onboard"
              />
            </Col>
            <Col sm="4">
              <PriceCard
                validatedContacts="Custom"
                machineNumber="Custom"
                runtime="Custom"
                enterprise
                tryPath="/onboard"
              />
            </Col>
          </Row>
        </Container>
      </PriceSection>
    )
  }
}
