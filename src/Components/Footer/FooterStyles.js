import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    min-height: 500px;
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};

    display: flex;
    flex-direction: column;
`

export const FooterHeader = styled.div`
    width: 100%;
    height: 80px;

    background-color: ${props => {return `rgb(${props.secondaryColor[0]}, ${props.secondaryColor[1]}, ${props.secondaryColor[2]}, ${props.secondaryColor[3]})`}};
`

export const FooterBody = styled.div`
    width: 100%;
    height: 100%;

    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
    display: flex;
`