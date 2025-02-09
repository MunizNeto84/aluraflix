import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", serif;
  }

  body {
    background-color: #111;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
