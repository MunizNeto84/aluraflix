import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary200: #5608f3;
    --primary400: #4306c1;
    --primary600: #32048f;
    --disabled: #444444;
    --background: #111;
    --text: #e1e1e1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", serif;
  }

  body {
    background-color: var(--background);
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
