import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding : 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #22272D;
  } 
`;

export default GlobalStyle;
