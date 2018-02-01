import { injectGlobal } from 'styled-components'

injectGlobal`
	@font-face {
	  font-family: GTWalsheim;
	  src: url(/files/fonts/GT-Walsheim/GT-Walsheim-Medium.ttf);
	}
	@font-face {
	  font-family: Avenir;
	  src: url(/files/fonts/Avenir/AvenirLTStd-Roman.otf);
	}
	@font-face {
	  font-family: CircularStd;
	  src: url(/files/fonts/CircularStd/CircularStd-medium.otf);
	}
	body {
		font-family: 'CircularStd';
	}
	.App {
		display: flex;
  	flex-direction: column;
	}
	.App > .pageContent {
		flex: 1;
    overflow: auto;
	}
`