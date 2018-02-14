import React from 'react'
import styled from 'styled-components'
import { H2, H5, H6 } from '../../../components/Typography'
import { Container, Row, Col } from '../../../components/Layout'
import Button from '../../../components/Button'
import { withPrefix} from 'gatsby-link'

const Warpper = styled.div`
	background: rgba(73, 92, 242, 0.98);
	padding: 50px 0;
	text-align: center;
`

const NewsSectionTitle = H2.extend`
	font-family: GTWalsheim;
	color: #ffffff;
	margin-bottom: 40px;
`

const NewsTitle = H5.extend`
	text-align: left;
	color: #ffffff;
	font-weight: 600;
`

const NewsContent = H6.extend`
	text-align: left;
	color: #ffffff;
	font-weight: 400;
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
					<NewsTitle>Cup of Data Launches at Data Science Salon in Miami</NewsTitle>
					<NewsContent className="text-left">
						Cup of Data, a marketing science solution for account based marketing, launches at Data Science Salon in Miami
					</NewsContent>
				</Col>
			</NewsRow>
			<BtnReadMore outline>Read more</BtnReadMore>
		</Container>
	</Warpper>
)

export default NewsView
