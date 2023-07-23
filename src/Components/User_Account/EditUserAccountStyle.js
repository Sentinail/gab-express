import styled from "styled-components";

export const EditUserAccountContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    border: 2px solid ${props => {return `rgb(${props.borderColor[0]}, ${props.borderColor[1]}, ${props.borderColor[2]}, ${props.borderColor[3]})`}};
    gap: 100px;

    animation: fadeIn 0.5s ease-in-out;

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-50px);}
        to { opacity: 1; transform: translateY(0px);}
    }
`

export const ProfilePictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px;
    border-top: 2px solid ${props => {return `rgb(${props.borderColor[0]}, ${props.borderColor[1]}, ${props.borderColor[2]}, ${props.borderColor[3]})`}};
    border-bottom: 2px solid ${props => {return `rgb(${props.borderColor[0]}, ${props.borderColor[1]}, ${props.borderColor[2]}, ${props.borderColor[3]})`}};
    width: 100%;

    & h1 {
        color: #000000;
    }

    & img {
        width: 300px;
        height: auto
    }

    & input[type="file"] {
        display: none;
    }

    & #image-input-label {
        font-family: "Bebas Neue", sans-serif;
        color: #FFFFFF;
        width: 100%;
        max-width: 300px;
        padding: 10px 30px;
        text-align: center;
        font-size: 2rem;
        background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
        border-radius: 20px;
        transition: all 0.2s ease-in-out;

        &:hover {
            cursor: pointer;
            scale: 1.1;
    }
    }
`

export const ProfileAboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    gap: 20px;
    padding: 50px;
    border-top: 2px solid ${props => {return `rgb(${props.borderColor[0]}, ${props.borderColor[1]}, ${props.borderColor[2]}, ${props.borderColor[3]})`}};
    border-bottom: 2px solid ${props => {return `rgb(${props.borderColor[0]}, ${props.borderColor[1]}, ${props.borderColor[2]}, ${props.borderColor[3]})`}};
    width: 100%;

    & h1, textarea {
        color: #000000;
        outline: none;
    }

    & textarea {
        text-align: center;
        min-width: 300px;
        min-height: 300px;
    }

`

export const SubmitChangesButton = styled.button`
    color: #FFFFFF;
    padding: 10px 30px;
    font-size: 2rem;
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
    border: none;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`   

export const GoBackToMyAccountButton = styled.button`
    color: #FFFFFF;
    padding: 10px 30px;
    font-size: 2rem;
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
    border: none;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`   