import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from '../../components/Global'
import Link, { withPrefix } from 'gatsby-link'
import { Title, SubTitle } from '../../components/Typography'
const Wrapper = styled.div`
	padding-top: 85px;
	padding-bottom: 130px;
	background-color: ${props => props.theme.contact.color.background};
	color: ${({theme}) => theme.contact.color.text};
`
const ContactTitle = styled(Title)`
	color: #ffffff;
	margin-top: 33px;
`
const ContactContent = styled(SubTitle)`
	line-height: 28px;
  font-family: Avenir;
  font-size: 16px;
`
const ContactLink = styled(Link)`
	font-family: Avenir;
	color: ${({theme}) => theme.contact.color.text};
	text-decoration: none;
	line-height: 2rem;
`
const Ul = styled.ul`
	list-style: none;
	padding: 0;
`
const Li = styled.li`
	margin-top: 1rem;
`
const Icon = styled.i`
	opacity: 0.5;
	margin-right: 2rem;
`
const ContactSection = () => (
	<Wrapper>
		<Container>
			<Row>
				<Col sm="5">
					<img src={withPrefix('/files/images/img-logo.svg')} width="120" />
					<ContactContent>Guided data science consists of services used by business analysts and data scientists to enhance their productivity while exploring data, building machine and deep learning models, and creating rich visualizations to tell their data stories.</ContactContent>
				</Col>
				<Col sm="3">
					<ContactTitle>SITEMAP</ContactTitle>
					<Ul>
						<Li><ContactLink to="/">Home</ContactLink></Li>
						<Li><ContactLink to="/resources">Resources</ContactLink></Li>
						<Li><ContactLink to="/pricing">Pricing</ContactLink></Li>
						<Li><ContactLink to="/company">Company</ContactLink></Li>
						<Li><ContactLink to="/blogs">Blogs</ContactLink></Li>
					</Ul>
				</Col>
				<Col sm="4">
					<ContactTitle>CONTACT US</ContactTitle>
					<ContactContent>Dallas<br/>10878 Plano Road, Suite A, Bldg 2<br/>Dallas, TX 75238</ContactContent>
					<div>
						<Icon className="fab fa-facebook-square fa-2x" />
						<Icon className="fab fa-twitter fa-2x" />
						<Icon className="fab fa-linkedin fa-2x" />
						<Icon className="fab fa-github fa-2x" />
					</div>
				</Col>
			</Row>
		</Container>
	</Wrapper>
)
export default ContactSection