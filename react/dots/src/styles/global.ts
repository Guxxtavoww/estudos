import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
   }

  body {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }

  .app_wrapper {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 4fr 1fr;
  }

  .dots_container {
    position: relative;
    cursor: pointer;
    &::before {
        content: 'Clique em qualquer lugar nessa seção';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.5;
        z-index: 1;
        font-size: 5em;
        width: 100%;
        text-align: center;
    }
  }

  .controls_container {
    border-top: 2px solid #808080;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;
  }
`;

export default GlobalStyles;
