import React from 'react';
import styled from 'styled-components'
import { Title } from './Typography'
const Card = styled.div`
	background-image: url(/files/images/img-quote.png);
	background-repeat: no-repeat;
	background-position-x: 0;
	background-position-y: 0;
	background-size: 60px;
	width: 100%;
	padding-top: 30px;
	padding-left: 30px;
	height: 100%;
`
const CardWrapper = styled.div`
	width: 100%;
	padding: 40px 30px;
	-webkit-box-shadow: 3px 4px 26px -2px rgba(153,153,153,1);
	-moz-box-shadow: 3px 4px 26px -2px rgba(153,153,153,1);
	box-shadow: 3px 4px 26px -2px rgba(153,153,153,1);
	height: 100%;
	background-color: #ffffff;
`
const Photo = styled.img`
	border: 2px solid #35a73e;
  border-radius: 90px;
`
const PositionName = styled.h4`
	font-size: 16px;
	line-height: 31px;
	letter-spacing: 1%;
	color: rgba(0,0,0,0.7);
	font-family: Avenir;
`
const Quote = styled.p`
	font-family: Avenir;
	font-size: 16px;
	line-height: 27px;
	text-align: left;
	letter-spacing: 1%;
	color: #000000;
`
const AvatarCard = (props) => (
	<Card>
		<CardWrapper>
			<div className="mb-3">
				<Photo src={props.avatarUrl} />
			</div>
			<Title>{props.name}</Title>
			<PositionName>{props.position}</PositionName>
			<Quote>{props.quote}</Quote>
		</CardWrapper>
	</Card>
)
export default AvatarCard