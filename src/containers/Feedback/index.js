import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../components/Typography'
import { Container, Row, Col } from '../../components/Layout'
import { withPrefix } from 'gatsby-link'
import AvatarCard from '../../components/AvatarCard'

const Wrapper = styled.div`
	padding-top: 81px;
	padding-bottom: 145px;
	@media screen and (max-width: 576px) {
		padding-top: 2rem;
		padding-bottom: 3rem;
	}
`

const FeedbackSectionTitle = SectionTitle.extend`
	margin-bottom: 70px;
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

const FeedbackSection = () => (
	<Wrapper>
		<FeedbackSectionTitle>Testimonials</FeedbackSectionTitle>
		<Container>
			<TestimonialsRow>
				<Col xs="12" sm="6" md="4">
					<AvatarCard
						avatarUrl="/files/images/avatar-robert.png"
						name="Robert Joseph"
						position="Data Scientist, Stanley Black and Decker"
						quote="The easy to use, robust API made it simple to integrate 3Blades quickly and safely with internal applications."
					/>
				</Col>
				<Col xs="12" sm="6"  md="4" className="text-center">
					<AvatarCard
						avatarUrl="/files/images/avatar-anna.png"
						name="Anna Anisin"
						position="Founder, Formulated.by"
						quote="We obtained higher quality B2B leads, faster, and were able to integrate with the Martech tools we know and love."
					/>
				</Col>
			</TestimonialsRow>
		</Container>
	</Wrapper>
)

export default FeedbackSection
