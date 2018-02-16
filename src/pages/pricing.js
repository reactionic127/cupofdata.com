import React from 'react'
import Helmet from 'react-helmet'
import PriceSection from '../containers/Pricing/PriceSection'
import FAQSection from '../containers/Pricing/FAQ'

export default class Pricing extends React.Component {
	constructor(props) {
		super(props)

		
	}
	render() {
		return (
			<div>
				<Helmet title={`Pricing | ${this.props.data.site.siteMetadata.title}`} />
				<PriceSection />
				<FAQSection />
			</div>
		)
	}
}
export const Price = graphql`
query PriceQuery {
  site {
    siteMetadata {
      title
    }
  }
}`
