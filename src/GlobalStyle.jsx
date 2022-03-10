import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding : 0;
  }

  html {
    font-family: 'Press Start 2P', cursive;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #202020;
  } 
`;

export default GlobalStyle;
