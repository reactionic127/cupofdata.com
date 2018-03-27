import React from 'react'
import styled from 'styled-components'

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: none;
`

const BetaForm = () => <Iframe src={`${process.env.GATSBY_BETAFORM_URL}`} />

export default BetaForm
