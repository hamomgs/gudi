import { createGlobalStyle } from 'styled-components'
import blackFont from '../../assets/fonts/ArgentumSans-Black.ttf'
import lightFont from '../../assets/fonts/ArgentumSans-Light.ttf'
import regularFont from '../../assets/fonts/ArgentumSans-Regular.ttf'
import mediumFont from '../../assets/fonts/ArgentumSans-Medium.ttf'
import boldFont from '../../assets/fonts/ArgentumSans-Bold.ttf'


export default createGlobalStyle`
  @font-face {
    font-family: 'Argentum Black';
    src: url(${blackFont});
  }

  @font-face {
    font-family: 'Argentum Light';
    src: url(${lightFont});
  }

  @font-face {
    font-family: 'Argentum Regular';
    src: url(${regularFont});
  }

  @font-face {
    font-family: 'Argentum Medium';
    src: url(${mediumFont});
  }

  @font-face {
    font-family: 'Argentum Bold';
    src: url(${boldFont});
  }

  /* :root {
    font-size: 62.5%;
  } */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    list-style: none;
  }
`