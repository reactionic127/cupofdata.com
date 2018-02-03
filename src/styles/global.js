import { injectGlobal } from 'styled-components'

injectGlobal`
	@font-face {
	  font-family: GTWalsheim;
	  src: url(/files/fonts/GT-Walsheim/GT-Walsheim-Medium.ttf);

	}
	@font-face {
	  font-family: Avenir;
	  src: url(/files/fonts/Avenir/AvenirLTStd-Light.otf);
	}
	@font-face {
	  font-family: CircularStd;
	  src: url(/files/fonts/CircularStd/CircularStd-book.otf);
	}
	body {
		font-family: 'CircularStd';
		padding: 0;
		margin: 0;
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