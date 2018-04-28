import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H2 } from '../Typography'
import { Container, Row, Col } from '../Layout'
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
  const testimonials = data.data.allMarkdownRemark.edges.filter(item => {
    return item.node.frontmatter.contentType === 'testimonial'
  })
  const { allFile } = data.data
  let imagesArray = []
  allFile.edges.map(({ node: file }) => imagesArray.push(file))
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
                  imagesArray={imagesArray}
                />
              </Col>
            ))}
          </TestimonialsRow>
        </Container>
      )}
    </Wrapper>
  )
}

Testimonials.propTypes = {
  data: PropTypes.object,
}

export default Testimonials
