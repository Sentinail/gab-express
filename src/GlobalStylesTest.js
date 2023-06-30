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

        & #root {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
        }
    }
`

export default GlobalStyleForTest