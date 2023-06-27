import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${props => {return props.backgroundColor}};
    display: flex;
    flex-direction: column;
`