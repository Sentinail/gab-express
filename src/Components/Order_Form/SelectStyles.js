import styled from "styled-components";

export const SelectContainer = styled.div`
    width: 500px;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    animation: fadeIn 0.5s ease-in-out;

    &:hover {
        cursor: pointer;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-50px);}
        to { opacity: 1; transform: translateY(0px);}
    }

    * {
        color: #ffffff;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    

    z-index: 10;

    & .content {
        width: 100%;    
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
        border-radius: 50px;
        margin-bottom: 10px;
    }
`

export const Options = styled.div`
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

    width: 100%;
    height: ${props => {return props.isVisible ? 500 : 0}}px;
    opacity: ${props => {return props.isVisible ? 1 : 0}};
    background-color: rgba(47, 46, 46, 1);
    transition: all 1s;
    z-index: 1;
    overflow-y: scroll;
    border-radius: 50px 0px 0px 50px;
`

export const OptionsData = styled.div`
    height: auto;
    padding: 10px;
    display: flex;
    justify-content: center;
    
    &:hover {
        background-color: rgba(75, 141, 193, 1);
    }

    z-index: 1;
`