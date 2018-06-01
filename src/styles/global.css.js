import { injectGlobal } from 'emotion';
import MontserratRegularTTF from '../assets/fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratBlackTTF from '../assets/fonts/Montserrat/Montserrat-Black.ttf';
import MontserratLightTTF from '../assets/fonts/Montserrat/Montserrat-Light.ttf';
import MontserratExtraLightTTF from '../assets/fonts/Montserrat/Montserrat-ExtraLight.ttf';

injectGlobal`
  @font-face {
     font-family: 'Montserrat';
     font-weight: 200;
     src:  url(${MontserratRegularTTF}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat Light';
    src:  url(${MontserratLightTTF}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat Extra Light';
    src:  url(${MontserratExtraLightTTF}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat Black';
    src:  url(${MontserratBlackTTF}) format('truetype');
  }

  * {
    box-sizing: border-box;
    font-family: Montserrat;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: rgb(188,187,213);
    background: linear-gradient(180deg, rgba(188,187,213,1) 0%, rgba(208,208,238,1) 35%, rgba(248,251,251,1) 100%);
  }
`;
