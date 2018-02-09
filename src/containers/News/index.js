import React from 'react'
import styled from 'styled-components'
import { SectionTitle, Title, SubTitle  } from '../../components/Typography'
import { Container, Row, Col } from '../../components/Layout'
import Button from '../../components/Button'
import { withPrefix} from 'gatsby-link'

const Warpper = styled.div`
	background: rgba(73, 92, 242, 0.98);
	padding: 50px 0;
	text-align: center;
`

const NewsSectionTitle = SectionTitle.extend`
	color: #ffffff;
	margin-bottom: 40px;
`

const NewsTitle = styled(Title)`
	text-align: left;
	color: #ffffff;
	letter-spacing: 1.2px;
`

const NewsContent = SubTitle.extend`
	text-align: left;
	color: #ffffff;
	line-height: 26px;
	font-family: Avenir;
	letter-spacing: 1.2px;
`

const BtnReadMore = Button.extend`
	margin-top: 70px;
`

const NewsRow = Row.extend`
	justify-content: center;
`

const NewsView = () => (
	<Warpper>
		<NewsSectionTitle>In the news</NewsSectionTitle>
		<Container>
			<NewsRow>
				<Col xs="12" sm="6" md="4">
					<img src={withPrefix('/files/blog/launch.jpg')} width="100%" />
					<NewsTitle className="text-left">Cup of Data Launches at Data Science Salon in Miami</NewsTitle>
					<NewsContent className="text-left">Cup of Data, a marketing science solution for account based marketing, launches at Data Science Salon in Miami
</NewsContent>
				</Col>
			</NewsRow>
			<BtnReadMore outline>Read more</BtnReadMore>
		</Container>
	</Warpper>
)

export default NewsView
