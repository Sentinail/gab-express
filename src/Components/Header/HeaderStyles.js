import styled from "styled-components";

export const Container = styled.div`
    * {
        font-size: 25px;
        font-weight: 900;
        letter-spacing: 1.75px;

        transition: all 0.2s;
    }

    width: 100%;
    height: 80px;
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    padding: 0px calc(100vw - 90vw);
    position: sticky;
    top: 0px;
    left: 0px;

    z-index: 100;

    @media screen and (max-width: 576px){
        & {
            padding: 20px
        }
    }

    

    & .button-wrapper {
        display: flex;
        align-items: center
    }

    & .responsive-navbar {
        position: absolute;
        top: 99%;
        left: 0px;
        width: 100%;
        height: ${props => {return props.isNavbarVisible ? 300 : 0}}px;
        gap: 20px;
        background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: hidden;

        & a {
            width: 100%;
            text-align: center;
            margin-top: 5px;
            margin-bottom: 5px;

            &:hover  {
                color: #FFFFFF;
                background-color: ${props => {return `rgb(${props.secondaryColor[0]}, ${props.secondaryColor[1]}, ${props.secondaryColor[2]}, ${props.secondaryColor[3]})`}};
            }
        }

        @media screen and (min-width: 992px) {
            & {
                display: none;
            }
        }
    }
    

    & .burger {
        display: none;
    }

    & img {
        width: 50px;
        height: auto;

        &:hover {
            scale: 1.1;
            cursor: pointer;
        }
    }

    & a {
        text-decoration: none;
        color: white;
        padding: 10px;

        &:hover {
            color: ${props => {return `rgb(${props.secondaryColor[0]}, ${props.secondaryColor[1]}, ${props.secondaryColor[2]}, ${props.secondaryColor[3]})`}};
        }
    }

    & .rotate {
        transform: rotate(360deg);
    }

    & .burger-wrapper {
        display: none
    }
    
    @media screen and (max-width: 992px) {
        & {
            justify-content: space-between;
        }

        & .burger {
            display: block;
        }
        & .burger-wrapper {
            display: block
        }
    }
`

export const HeaderContainerShadow = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    background-color: #2F2E2E;
    top: 0px;
    left: 0px;
    /* box-shadow: 0px 25px 100px 100px #2F2E2E; */
    z-index: 1;
`

export const NavBar = styled.div`
    min-width: 600px;
    height: auto;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: ${props => {return props.flexDirection}};

    @media screen and (max-width: 992px) {
        & {
            display: none;
        }
    }
`

export const DonateLoginContainer = styled.div`
    width: 350px;
    max-width: 300px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 400px) {
        gap: 0;
    }
`

export const LoginButton = styled.button`
    min-width: 100px;

    padding: 10px;
    background-color: #FFFFFF;

    border: none;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`

export const MyAccountButton = styled.button`
    min-width: 100px;

    padding: 10px;
    background-color: #FFFFFF;

    border: none;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`

export const DonateButton = styled.button`
    min-width: 100px;

    padding: 10px;
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};

    border: none;
    border-radius: 10px;

    color: #FFFFFF;

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }
`
