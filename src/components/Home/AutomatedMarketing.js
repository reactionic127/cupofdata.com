import React from 'react'
import { Container } from '../Layout'
import Button from '../Button'
import { H2, H4, H5, H6 } from '../Typography'
import Link, { withPrefix } from 'gatsby-link'
import styled from 'styled-components'

import autoMarketing from '../../img/bk-automarketing.png'

const Wrapper = styled.div`
  background: url(${autoMarketing});
  background-size: 100%;
  position: relative;
  padding: 70px 0;
  @media screen and (max-width: 576px) {
    padding: 40px 30px;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(252, 132, 43, 0.97);
`

const MainContainer = styled(Container)`
  position: relative;
  z-index: 1;
`

const AutomatedMarketingSectionTitle = H2.extend`
  text-align: left;
  color: ${props => props.theme.automarketing.color.sectionTitle};
  @media screen and (max-width: 576px) {
    font-size: 24px;
    line-height: 28px;
  }
`

const Content = H6.extend`
  color: ${props => props.theme.automarketing.color.content};
  margin-bottom: 2rem;
  font-weight: 500;
  margin-top: 10px;
  @media screen and (max-width: 576px) {
    margin-bottom: 1rem;
  }
`

const RegButton = styled(Button)`
  border-radius: 25px;
  background: ${props => props.theme.automarketing.color.btnBackground};
  color: ${props => props.theme.automarketing.color.buttonText};
  font-family: Avenir;
  &:focus {
    box-shadow: none;
  }
`
export default class AutomatedMarketingSection extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { data } = this.props
    const info = data.filter(item => {
      return item.node.frontmatter.contentType === 'automatedmarketing'
    })
    const { title, content } = info[0].node.frontmatter
    return (
      <Wrapper>
        <Overlay />
        <MainContainer>
          <AutomatedMarketingSectionTitle>
            {title}
          </AutomatedMarketingSectionTitle>
          <Content>{content}</Content>
          <Link to="/onboard">
            <RegButton className="py-0 px-5 border-0">Register Now</RegButton>
          </Link>
        </MainContainer>
      </Wrapper>
    )
  }
}
