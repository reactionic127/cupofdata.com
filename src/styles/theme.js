import { rgba } from 'polished'

const color = {
	white: '#ffffff',
	orange: '#ff842b',
	black_90: rgba(0,0,0, 0.9),
	gunmetal: '#2C333B',
	oxfordBlue: '#283038'
}

const theme = {
	color: color,
	navbar: {
		textColor: color.white
	},
	sliderCOD: {
		color: {
			sectionTitle: color.black_90
		}
	},
	automarketing: {
		color: {
			sectionTitle: color.white,
			content: color.white,
			btnBackground: color.white,
			buttonText: color.orange
		}
	},
	contact: {
		color: {
			background: color.gunmetal,
			text: color.white,
		}
	},
	footer: {
		color: {
			background: color.oxfordBlue,
			text: rgba( color.white, 0.5)
		}
	}
}

export default theme;
