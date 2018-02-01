import { rgba } from 'polished'
const color = {
	white: '#ffffff',
	orange: '#ff842b',
	black_90: rgba(0,0,0, 0.9)
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
	}
}
export default theme;