import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H3 } from '../Typography'
import { Container } from '../Layout'

const Wrapper = styled.div`
  padding: 50px 0 90px 0;
  background: #f5f7fa;
`

const FaqSectionTitle = H3.extend`
  font-size: 30px;
  line-height: 35px;
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
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
`

const Answer = styled.div`
  h5 {
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    font-weight: 500;
  }
`

const FaqSection = ({ faqs }) => (
  <Wrapper>
    <FaqSectionTitle>Frequently Asked Questions</FaqSectionTitle>
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

FaqSection.propTypes = {
  faqs: PropTypes.array,
}

export default FaqSection
