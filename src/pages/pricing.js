import React from 'react'
import PriceSection from '../containers/Pricing/PriceSection'
import FAQSection from '../containers/Pricing/FAQ'

export default class Pricing extends React.Component {
	constructor(props) {
		super(props)

		
	}
	render() {
		return (
			<div>
				<PriceSection />
				<FAQSection />
			</div>
		)
	}
}
