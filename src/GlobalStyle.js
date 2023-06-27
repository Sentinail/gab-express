import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
            font-family: Agharti;
            src: url("./Assets/Fonts/Agharti-BlackSemiCondensed.ttf");
    }

    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: Agharti;
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