import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from '../../components/Global'
import Link, { withPrefix, navigateTo } from 'gatsby-link'
import { Title, SubTitle } from '../../components/Typography'
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from 'react-share'
import {
	LINKEDIN_URL,
	FACEBOOK_URL,
	TWITTER_URL,
	SOCIAL_TITLE
} from '../../config/constants'

const Wrapper = styled.div`
	padding-top: 85px;
	padding-bottom: 130px;
	background-color: ${props => props.theme.contact.color.background};
	color: ${({theme}) => theme.contact.color.text};
`

const ContactTitle = styled(Title)`
	color: ${({theme}) => theme.contact.color.text};
	margin-top: 33px;
`

const ContactContent = SubTitle.extend`
	margin-top: 2rem;
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

const ShareIcon = styled.div`
	margin-top: 2rem;
`

const ContactSection = () => (
	<Wrapper>
		<Container>
			<Row>
				<Col sm="5">
					<img src={withPrefix('/files/images/img-logo.png')} width="120" />
					<ContactContent>Cup of Data’s mission is turbocharge growth at B2B SaaS companies using A.I.. By alleviating businesses from the manual, repetitive tasks associated with obtaining marketing qualified leads, marketers and sales professionals can focus on creating unique experiences with their customers and partners.</ContactContent>
				</Col>
				<Col sm="3">
					<ContactTitle>SITEMAP</ContactTitle>
					<Ul>
						<Li><ContactLink to="/">Home</ContactLink></Li>
						<Li><ContactLink to="/about">Company</ContactLink></Li>
						<Li><ContactLink to="/blog">Blogs</ContactLink></Li>
					</Ul>
				</Col>
				<Col sm="4">
					<ContactTitle>CONTACT US</ContactTitle>
					<ContactContent>Cup of Data<br/>3423 Piedmont Rd NE<br/>Atlanta, GA 30305</ContactContent>
					<ShareIcon>
						<FacebookShareButton
							url={FACEBOOK_URL}
							quote={SOCIAL_TITLE}
							className="social-button"
							windowWidth={750}
            	windowHeight={600}
						>
							<Icon className="fab fa-facebook-square fa-2x" />
						</FacebookShareButton>
						<TwitterShareButton
							url={TWITTER_URL}
							title={SOCIAL_TITLE}
							className="social-button"
							windowWidth={600}
            	windowHeight={600}
						>
							<Icon className="fab fa-twitter fa-2x" />
						</TwitterShareButton>
						<LinkedinShareButton
							url={LINKEDIN_URL}
							title={SOCIAL_TITLE}
							className="social-button"
							windowWidth={600}
            	windowHeight={600}
						>
							<Icon className="fab fa-linkedin fa-2x" />
						</LinkedinShareButton>
					</ShareIcon>
				</Col>
			</Row>
		</Container>
	</Wrapper>
)

export default ContactSection
