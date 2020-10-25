import css from "styled-jsx/css";

export default css.global`
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
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  label {
    font-family: "Fira Sans", sans-serif;
  }
`;
