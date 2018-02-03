import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../components/Typography'
import { Container, Row, Col } from '../../components/Global'
import { withPrefix } from 'gatsby-link'
import AvatarCard from '../../components/AvatarCard'
const Wrapper = styled.div`
	padding-top: 81px;
	padding-bottom: 145px;
`
const FeedbackSectionTitle = SectionTitle.extend`
	margin-bottom: 70px
`
const FeedbackSection = () => (
	<Wrapper>
		<FeedbackSectionTitle>Few words from our clients</FeedbackSectionTitle>
		<Container>
			<Row>
				<Col xs="4">
					<AvatarCard
						avatarUrl={withPrefix('/files/images/avatar-Damien.png')}
						name="Damien Martin"
						position="CEO Airspecies"
						quote="cupfdata is the leading-edge messenger marketing tool to creat both viral and organic growth for your brand"
					/>
				</Col>
				<Col xs="4" className="text-center">
					<AvatarCard
						avatarUrl={withPrefix('/files/images/avatar-Theresa.png')}
						name="Theresa Mill"
						position="Co-founder Tiara"
						quote="It helps to create an empowering journey of connection with your fans and followers"
					/>
				</Col>
				<Col xs="4" className="text-center">
					<AvatarCard
						avatarUrl={withPrefix('/files/images/avatar-Diane.png')}
						name="Diane Nyugen"
						position="Writer The little pony"
						quote="This game-changing communication tool helped my brand to attract thousands of new leads within just a few days"
					/>
				</Col>
			</Row>
		</Container>
	</Wrapper>
)
export default FeedbackSection