import { createGlobalStyle } from "styled-components";

const GlobalStyleForTest = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: grey;
        min-width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default GlobalStyleForTest