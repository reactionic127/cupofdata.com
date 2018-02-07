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
const NewsView = () => (
	<Warpper>
		<NewsSectionTitle>In the news</NewsSectionTitle>
		<Container>
			<Row>
				<Col sm="4">
					<img src={withPrefix('/files/images/img-news1.png')} width="100%" />
					<NewsTitle className="text-left">Vlit esse cillum dolore eu fugiat nulla paratur</NewsTitle>
					<NewsContent className="text-left">Duis aute irure dolor in reprehenderit in voluptate velid esse cillum dolore eu fugiat nulla pariatur</NewsContent>
				</Col>
				<Col sm="4">
					<img src={withPrefix('/files/images/img-news2.png')} width="100%" />
					<NewsTitle className="text-left">Vlit esse cillum dolore eu fugiat nulla paratur</NewsTitle>
					<NewsContent className="text-left">Irure dolor in reprehenderit in voluptate velid esse cillum dolore eu fugiat nulla pariatur</NewsContent>
				</Col>
				<Col sm="4">
					<img src={withPrefix('/files/images/img-news3.png')} width="100%" />
					<NewsTitle className="text-left">Vlit esse cillum dolore eu fugiat nulla paratur</NewsTitle>
					<NewsContent className="text-left">Duis aute irure dolor in reprehenderit in voluptate velid esse cillum dolore eu fugiat nulla pariatur</NewsContent>
				</Col>
			</Row>
			<BtnReadMore outline>Read more</BtnReadMore>
		</Container>
	</Warpper>
)
export default NewsView
