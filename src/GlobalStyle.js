import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* @font-face {
            font-family: Agharti;
            src: url("./Assets/Fonts/Agharti-BlackSemiCondensed.ttf");
    } */

    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        /* font-family: Agharti; */
        font-family: 'Bebas Neue', sans-serif;
        transition: background-color 0.8s ease-in-out;
    }

    body {
        overflow-x: hidden;
    }

    input, textarea, label {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }



    ::-webkit-scrollbar {
    width: 8px; 
    }

    
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }

    
    ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 4px; 
    }

    
    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
`

export default GlobalStyle;