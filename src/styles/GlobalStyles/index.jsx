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

  :root {
    --blue: #005bd5;
    --dark-blue: #002e6b;
    --light-gray: #eee;
    --gray: #afb3b8;
    --dark-gray: #8b8b8b;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    list-style: none;
    font-family: 'Argentum Regular';
  }

  html {
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  ::-webkit-scrollbar {
    width: 0.6vw;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 50px 0 0 50px;
    background-color: var(--blue);
  }
`