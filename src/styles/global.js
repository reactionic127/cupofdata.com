import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
	  font-family: GTWalsheimBold;
	  src: url(/files/fonts/GT-Walsheim/GT-Walsheim-Bold.ttf);
  }
	@font-face {
	  font-family: GTWalsheimMedium;
	  src: url(/files/fonts/GT-Walsheim/GT-Walsheim-Medium.ttf);
	}
	@font-face {
	  font-family: AvenirNextBold;
	  src: url(/files/fonts/AvenirNext/AvenirNext-Bold.ttf) format('truetype');
	}
	@font-face {
	  font-family: AvenirNextBoldItalic;
	  src: url(/files/fonts/AvenirNext/AvenirNext-BoldItalic.ttf) format('truetype');
	}
	@font-face {
	  font-family: AvenirNextDemiBold;
	  src: url(/files/fonts/AvenirNext/AvenirNext-DemiBold.ttf) format('truetype');
	}
	@font-face {
	  font-family: AvenirNextDemiBoldItallic;
	  src: url(/files/fonts/AvenirNext/AvenirNext-DemiBoldItalic.ttf) format('truetype');
	}
	@font-face {
	  font-family: AvenirNextHeavy;
	  src: url(/files/fonts/AvenirNext/AvenirNext-Heavy.ttf) format('truetype');
	}
	@font-face {
	  font-family: AvenirNextHeavyItallic;
	  src: url(/files/fonts/AvenirNext/AvenirNext-HeavyItalic.ttf) format('truetype');
	}
	@font-face {
	  font-family: AvenirNextBoldItallic;
	  src: url(/files/fonts/AvenirNext/AvenirNext-DemiBoldItalic.ttf) format('truetype');
	}
	@font-face {
	  font-family: AvenirNextMedium;
	  src: url(/files/fonts/AvenirNext/AvenirNext-Medium.ttf) format('truetype');
	}
	@font-face {
	  font-family: AvenirNextMediumItalic;
	  src: url(/files/fonts/AvenirNext/AvenirNext-MediumItalic.ttf) format('truetype');
	}
	@font-face {
	  font-family: AvenirNextRegular;
	  src: url(/files/fonts/AvenirNext/AvenirNext-Regular.ttf) format('truetype');
	}
	@font-face {
	  font-family: AvenirNextUltraLight;
	  src: url(/files/fonts/AvenirNext/AvenirNext-UltraLight.ttf) format('truetype');
	}
	@font-face {
	  font-family: AvenirNextUltraLightItalic;
	  src: url(/files/fonts/AvenirNext/AvenirNext-UltraLightItalic.ttf) format('truetype');
	}
  h1 {
		font-family: 'GTWalsheimMedium';
		font-size: 50px;
		color: #33475b;
		line-height: 1.58;
		padding: 0;
		margin: 0;
	}
	h2 {
		font-family: 'GTWalsheimMedium';
		font-size: 32px;
		color: #33475b;
		line-height: 1.58;
		padding: 0;
		margin: 0;
	}
	h3 {
		font-family: 'GTWalsheimMedium';
		font-size: 20px;
		color: #33475b;
		line-height: 1.58;
		padding: 0;
		margin: 0;
	}
	h4 {
		font-family: 'AvenirNextBold';
		font-size: 22px;
		color: #33475b;
		line-height: 1.58;
		padding: 0;
		margin: 0;
	}
	h5 {
		font-family: 'AvenirNextBoldItalic';
		font-size: 21px;
		color: #33475b;
		line-height: 1.58;
		padding: 0;
		margin: 0;
	}
	h6  {
		font-family: 'AvenirNextRegular';
		font-size: 21px;
		line-height: 1.58;
		color: #33475b;
 		padding: 0;
 		margin: 0;
 	}
	body, p {
		font-family: 'AvenirNextRegular';
		font-size: 18px;
		color: #33475b;
		line-height: 1.58;
		padding: 0;
		margin: 0;
	}
	bodyLarge, pLarge {
		font-family: 'AvenirNextMedium';
		font-size: 20px;
		color: #33475b;
		line-height: 1.58;
		padding: 0;
		margin: 0;
	}
	bodySmall, pSmall {
		font-family: 'AvenirNextRegular';
		font-size: 16px;
		color: #33475b;
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
    font-family: GTWalsheimMedium;
	}
	.cms-content p {
    margin: 1rem 0;
    font-family: AvenirNextRegular;
    font-weight: 400;
    line-height: 26px;
    font-size: 16px;
  }
  .cms-content li {
  	margin: 1rem 0;
    font-family: AvenirNextRegular;
    font-weight: 400;
    line-height: 26px;
    font-size: 16px;
  }
`
