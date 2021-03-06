import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    padding: 80px 85px 0;
    margin: 0;
    font-family: 'Montserrat';
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
