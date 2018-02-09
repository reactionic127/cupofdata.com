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


	/**** Style for slick ******/
	.slick-initialized.slick-slider {
		height: 100vh;
		display: none;
		@media screen and (max-width: 576px){
			display: block;
		}
	}
	.slick-initialized .slick-dots {
		bottom: 25px;
	}
	.slick-initialized .slick-dots li button::before {
		color: rgba(255,255,255,0.25);
	}
	.slick-initialized .slick-dots li.slick-active button::before {
		color: rgb(225,225,255);
	}
	
`