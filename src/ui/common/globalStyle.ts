import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    overflow-y: hidden;
    font-family: "Ubuntu", sans-serif;
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.textLight};
    height: 100vh;
    overflow-y: scroll;
  }
`;

export default GlobalStyle;
