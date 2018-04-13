import styled, { css } from 'styled-components'

function getWidthString(span) {
  if (!span) return

  let width = span / 12 * 100
  return `width: ${width}%;`
}

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  word-break: break-word;
  word-wrap: break-word;
  ul {
    color: #33475b;
  }
  ${props =>
    props.fluid &&
    css`
      max-width: none !important;
      width: auto;
    `};
  @media screen and (min-width: 576px) {
    max-width: 540px;
  }
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
  @media screen and (min-width: 992px) {
    max-width: 960px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0;
`

export const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`

export const CardTitle = styled.div`
  margin-bottom: 0.75rem;
`

export const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-flow: row wrap;
  }
`

export const Row = styled.div`
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  flex-wrap: wrap;
`

export const Col = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};
  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }
  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }
  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`
