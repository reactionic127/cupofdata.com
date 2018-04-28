import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import { H4, H6, P } from './Typography'
import Button from './Button'

import imageEnterprise from '../img/img-enterprise.svg'

const PlanCard = styled.div`
  border: 1px solid rgba(44, 51, 59, 0.2);
  text-align: center;
  margin-top: 2rem;
  ${({ enterpriseMode }) =>
    enterpriseMode &&
    css`
      background-color: #495cf2;
      color: white;
      border: none;
    `};
`

const PlanTitle = P.extend`
  font-weight: 600;
  padding: 5px 0;
  letter-spacing: 0.2rem;
  background-color: #f5f7fa;
  border-bottom: 1px solid rgba(44, 51, 59, 0.2);
`

const Price = H6.extend`
  margin-top: 1.5rem;
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 0.02em;
`

const PriceMode = P.extend`
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 2.5rem;
  letter-spacing: 0.1em;
`

const PriceDetail = H6.extend`
  margin-bottom: 1.5rem;
  font-weight: 500;
`

const PriceDetailEnterprise = H6.extend`
  margin-bottom: 1.5rem;
  font-weight: 500;
  color: #ffffff;
`

const TryButton = Button.extend`
  display: inline-block;
  text-decoration: none;
  font-size: 14px;
  line-height: 19px;
  padding: 0.5rem 2.5rem;
  margin: 1.5rem 0 2.5rem;
`.withComponent(Link)
const CardHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  text-align: center;
  padding: 46px 0 29px 0;
  margin-bottom: 2rem;
`

const EnterpriseTitle = H4.extend`
  color: ${({ theme }) => theme.price.color.text};
  letter-spacing: 0.15em;
  text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
`

const EnterpriseImage = styled.img`
  width: 35px;
`

const PriceCard = props => (
  <PlanCard enterpriseMode={props.enterprise}>
    {props.enterprise ? (
      <CardHeader>
        <EnterpriseImage src={imageEnterprise} />
        <EnterpriseTitle>ENTERPRISE</EnterpriseTitle>
      </CardHeader>
    ) : (
      <div>
        <PlanTitle>{props.title}</PlanTitle>
        <Price>{props.price}</Price>
        <PriceMode>USD PER MONTH</PriceMode>
      </div>
    )}
    {props.enterprise ? (
      <PriceDetailEnterprise>
        {props.validatedContacts} validated contacts
      </PriceDetailEnterprise>
    ) : (
      <PriceDetail>{props.validatedContacts} validated contacts</PriceDetail>
    )}
    <TryButton to={props.tryPath}>Try it for free</TryButton>
  </PlanCard>
)

PriceCard.propTypes = {
  enterprise: PropTypes.bool,
  title: PropTypes.string,
  price: PropTypes.number,
  tryPath: PropTypes.string,
  validatedContacts: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PriceCard
