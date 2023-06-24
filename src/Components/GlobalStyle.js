import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
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