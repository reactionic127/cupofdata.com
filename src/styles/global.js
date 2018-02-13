import { injectGlobal } from 'styled-components'

injectGlobal`
	@font-face {
	  font-family: GTWalsheim;
	  src: url(/files/fonts/GT-Walsheim/GT-Walsheim-Medium.ttf);

	}
	@font-face {
	  font-family: Avenir;
	  src: url(/files/fonts/AvenirNext/AvenirNext-UltraLight.ttf) format('truetype');
	  font-weight: 200;
    font-style: normal;
	}
	@font-face {
	  font-family: Avenir;
	  src: url(/files/fonts/AvenirNext/AvenirNext-UltraLightItalic.ttf) format('truetype');
	  font-weight: 200;
    font-style: italic;
	}
	@font-face {
	  font-family: Avenir;
	  src: url(/files/fonts/AvenirNext/AvenirNext-Regular.ttf) format('truetype');
	}
	@font-face {
	  font-family: Avenir;
	  src: url(/files/fonts/AvenirNext/AvenirNext-Medium.ttf) format('truetype');
	  font-weight: 500;
    font-style: normal;
	}
	@font-face {
	  font-family: Avenir;
	  src: url(/files/fonts/AvenirNext/AvenirNext-DemiBold.ttf) format('truetype');
	  font-weight: 600;
    font-style: normal;
	}
	@font-face {
	  font-family: Avenir;
	  src: url(/files/fonts/AvenirNext/AvenirNext-DemiBoldItalic.ttf) format('truetype');
	  font-weight: 600;
    font-style: italic;
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
	.cms-content h2 {
    margin: 0.75rem 0;
    font-family: GTWalsheim;
	}
	.cms-content p {
    margin: 1rem 0;
    font-family: Avenir;
    font-weight: 400;
    line-height: 26px;
    font-size: 16px;
  }
`