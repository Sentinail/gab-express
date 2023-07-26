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
    background: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
    }

    
    ::-webkit-scrollbar-thumb {
    background: ${props => {return `rgb(${props.secondaryColor[0]}, ${props.secondaryColor[1]}, ${props.secondaryColor[2]}, ${props.secondaryColor[3]})`}};; 
    border-radius: 4px; 
    }

    
    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
`

export default GlobalStyle;