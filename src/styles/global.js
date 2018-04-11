import { injectGlobal } from 'styled-components'

injectGlobal`
	@font-face {
	  font-family: GTWalsheim;
	  src: url(/files/fonts/GT-Walsheim/GT-Walsheim-Medium.ttf);
	}
	@font-face {
	  font-family: AvenirUltraLight;
	  src: url(/files/fonts/AvenirNext/AvenirNext-UltraLight.ttf) format('truetype');
	  font-weight: 200;
    font-style: normal;
	}
	@font-face {
	  font-family: AvenirUltraLightItallic;
	  src: url(/files/fonts/AvenirNext/AvenirNext-UltraLightItalic.ttf) format('truetype');
	  font-weight: 200;
    font-style: italic;
	}
	@font-face {
	  font-family: AvenirNextRegular;
	  src: url(/files/fonts/AvenirNext/AvenirNext-Regular.ttf) format('truetype');
	}
	@font-face {
	  font-family: AvenirNextMedium;
	  src: url(/files/fonts/AvenirNext/AvenirNext-Medium.ttf) format('truetype');
	  font-weight: 500;
    font-style: normal;
	}
	@font-face {
	  font-family: AvenirBold;
	  src: url(/files/fonts/AvenirNext/AvenirNext-DemiBold.ttf) format('truetype');
	  font-weight: 600;
    font-style: normal;
	}
	@font-face {
	  font-family: AvenirBoldItallic;
	  src: url(/files/fonts/AvenirNext/AvenirNext-DemiBoldItalic.ttf) format('truetype');
	  font-weight: 600;
    font-style: italic;
	}

	@font-face {
	  font-family: AvenirLight;
	  src: url(/files/fonts/Avenir/AvenirLTStd-Light.otf);
	}
  body, p {
  	font-family: 'AvenirNextRegular';
		font-weight: 400;
		font-size: 21px;
		color: #33475b;
		line-height: 1.58;
		padding: 0;
		margin: 0;
 	}
  h1, h2, h3, h4, h5, h6  {
		font-family: 'AvenirNextMedium';
		font-weight: 400;
		font-size: 24px;
		line-height: 1.58;
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
  .cms-content li {
  	margin: 1rem 0;
    font-family: Avenir;
    font-weight: 400;
    line-height: 26px;
    font-size: 16px;
  }
`
