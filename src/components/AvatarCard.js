import React from 'react';
import styled from 'styled-components'
import { H6 } from './Typography'

const Card = styled.div`
	background-image: url(/files/images/img-quote.svg);
	background-repeat: no-repeat;
	background-position-x: 0;
	background-position-y: 0;
	background-size: 60px;
	width: 100%;
	padding-top: 25px;
	padding-left: 25px;
	padding-right: 25px;
	height: 100%;
	box-sizing: border-box;
	@media screen and (max-width: 576px) {
		margin-top: 3rem;
	}
`

const CardWrapper = styled.div`
	width: 100%;
	padding: 40px 30px;
	-webkit-box-shadow: 3px 4px 26px -2px rgba(153,153,153,1);
	-moz-box-shadow: 3px 4px 26px -2px rgba(153,153,153,1);
	box-shadow: 3px 4px 26px -2px rgba(153,153,153,1);
	height: 100%;
	background-color: #ffffff;
	box-sizing: border-box;
	text-align: center;
`

const Photo = styled.img`
  border-radius: 90px;
  width: 82px;
`

const PositionName = H6.extend`
	color: rgba(0,0,0,0.7);
	margin-bottom: 23px;
	font-weight: 500;
	letter-spacing: 0.01em;
`

const Quote = H6.extend`
	line-height: 27px;
	text-align: left;
	letter-spacing: 0.01em;
	font-weight: 500;
`

const CardTitle = H6.extend`
	font-weight: 600;
	line-height: 35px;
	margin-top: 1rem;
`

const AvatarCard = (props) => (
	<Card>
		<CardWrapper>
			<Photo src={props.avatarUrl} />
			<CardTitle>{props.name}</CardTitle>
			<PositionName>{props.position}</PositionName>
			<Quote>{props.quote}</Quote>
		</CardWrapper>
	</Card>
)

export default AvatarCard
