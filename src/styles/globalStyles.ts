import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
    }

    h1 {
      font-size: 3.43rem;
    }

    h2 {
      font-size: 2.57rem;
    }

    h3 {
      font-size: 2rem;
    }

    body {
        height: 100vh;
        background-color: #F21062;
    }

    button {
        cursor: pointer;
        border: 0;
    }

    :root {
        --primary: #ED145B;
        --white: #FFFFFF;
        --whiteWithOpacity: #FFFFFF40;
        --black: #000000;
    }
`;

export const commonFlexPageStyle = `
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;
