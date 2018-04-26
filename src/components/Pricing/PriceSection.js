import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H1, H6, P } from '../Typography'
import { Container, Row, Col } from '../Layout'
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

const NoteText = H6.extend`
  font-weight: 400;
`

const PlanGroup = styled.div`
  padding: 2rem 0 0;
  margin-top: 0.5rem;
  text-align: center;
`

const Announcement = P.extend`
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
    const { priceInfo } = this.props
    return (
      <PriceSection>
        <Container>
          <PriceTitle>{priceInfo.title}</PriceTitle>
          <NoteText>{priceInfo.note}</NoteText>
          <PlanGroup>
            <Announcement>{priceInfo.announcement}</Announcement>
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
                tryPath="/onboards"
              />
            </Col>
          </Row>
        </Container>
      </PriceSection>
    )
  }
}

PlanSections.propTypes = {
  priceInfo: PropTypes.string,
}
