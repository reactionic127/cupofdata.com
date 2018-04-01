import React from 'react'
import styled from 'styled-components'
import { H3 } from '../Typography'
import { Container, Row, Col } from '../Layout'

const Wrapper = styled.div`
  padding: 50px 0 90px 0;
  background: #f5f7fa;
`

const Title = H3.extend`
  font-size: 30px;
  line-height: 35px;
  font-family: GTWalsheim;
  text-align: center;
  @media screen and (max-width: 576px) {
    padding: 0 2rem;
  }
`

const Content = Container.extend`
  margin-top: 60px;
  column-count: 2;
  -webkit-column-count: 2;
  -moz-column-count: 2;
  @media screen and (max-width: 576px) {
    column-count: 1;
    -webkit-column-count: 1;
    -moz-column-count: 1;
    padding: 0 2rem;
  }
`

const QASection = styled.div`
  margin-bottom: 40px;
  break-inside: avoid;
  display: inline-block;
`

const Question = styled.h4`
  font-size: 20px;
  line-height: 24px;
  text-align: left;
  font-family: GTWalsheim;
`

const Answer = styled.div`
  h5 {
    margin-top: 0.5rem;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    font-family: Avenir;
    font-weight: 500;
  }
`

const FaqSection = ({ faqs }) => (
  <Wrapper>
    <Title>Frequently Asked Questions</Title>
    {faqs && (
      <Content>
        {faqs.map((item, i) => (
          <QASection key={i}>
            <Question>{item.node.frontmatter.title}</Question>
            <Answer dangerouslySetInnerHTML={{ __html: item.node.html }} />
          </QASection>
        ))}
      </Content>
    )}
  </Wrapper>
)

export default FaqSection
