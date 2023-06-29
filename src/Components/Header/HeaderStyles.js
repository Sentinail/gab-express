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
    justify-content: space-between;
    align-items: center;
    
    padding: 0px calc(100vw - 88.889vw);
    position: sticky;
    top: 0px;
    left: 0px;

    z-index: 100;

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
`

export const HeaderContainerShadow = styled.div`
        width: 100%;
        height: 80px;
        position: fixed;
        top: 0px;
        left: 0px;
        box-shadow: 0px 25px 100px 100px #2F2E2E;   
        z-index: 5
`

export const NavBar = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(100vw - 95vw);
`

export const DonateLoginContainer = styled.div`
    width: 350px;

    display: flex;
    justify-content: space-between;
    align-items: center;
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
