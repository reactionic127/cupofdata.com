import { injectGlobal } from 'styled-components'

injectGlobal`
	@font-face {
	  font-family: GTWalsheim;
	  src: url(/files/fonts/GT-Walsheim/GT-Walsheim-Medium.ttf);

	}
	@font-face {
	  font-family: Avenir;
	  src: url(/files/fonts/Avenir/AvenirLTStd-Book.otf);
	}
	@font-face {
	  font-family: AvenirLight;
	  src: url(/files/fonts/Avenir/AvenirLTStd-Light.otf);
	}
	@font-face {
	  font-family: CircularStd;
	  src: url(/files/fonts/CircularStd/CircularStd-book.otf);
	}
	body, p, h1, h2, h3, h4, h5, h6 {
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
	.social-button {
		display: inline-flex;
		cursor: pointer;
	}
	.social-button:focus {
		outline: none;
	}
`