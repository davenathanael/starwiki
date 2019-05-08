import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i|Lora:400,400i,700,700i');
  
  /* CSS Reset by https://alligator.io/css/minimal-css-reset/ */

  html {
    box-sizing: border-box;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 576px) {
      font-size: 10px;
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  html,
  body {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    font-family: 'Karla', sans-serif;
  }
`;
