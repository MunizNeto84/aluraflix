import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary200: #5608f3;
    --primary400: #4306c1;
    --primary600: #32048f;
    --secondary: #595959;
    --disabled: #444444;
    --background: #111;
    --text: #e1e1e1;
    --modal: #181818;
    --card:#2b2b2b;
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
