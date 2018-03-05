import React from 'react'
import styled from 'styled-components'
import { H2 } from '../Typography'
import { Container, Row, Col } from '../Layout'
import { withPrefix } from 'gatsby-link'
import AvatarCard from '../AvatarCard'

const Wrapper = styled.div`
  padding-top: 81px;
  padding-bottom: 145px;
  @media screen and (max-width: 576px) {
    padding-top: 2rem;
    padding-bottom: 6rem;
  }
`

const FeedbackSectionTitle = H2.extend`
  margin-bottom: 70px;
  text-align: center;
  @media screen and (max-width: 576px) {
    margin-bottom: 0;
  }
`

const TestimonialsRow = Row.extend`
  justify-content: center;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

const Testimonials = data => {
  const testimonials = data.data.filter(item => {
    return item.node.frontmatter.contentType === 'testimonials'
  })
  return (
    <Wrapper>
      <FeedbackSectionTitle>Testimonials</FeedbackSectionTitle>
      {testimonials && (
        <Container>
          <TestimonialsRow>
            {testimonials.map((item, i) => (
              <Col xs="12" sm="6" md="4" key={i}>
                <AvatarCard
                  avatarUrl={item.node.frontmatter.photo}
                  name={item.node.frontmatter.title}
                  position={item.node.frontmatter.position}
                  quote={item.node.frontmatter.comment}
                />
              </Col>
            ))}
          </TestimonialsRow>
        </Container>
      )}
    </Wrapper>
  )
}

export default Testimonials
