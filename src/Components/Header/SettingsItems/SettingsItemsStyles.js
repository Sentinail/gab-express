import styled from "styled-components";

export const SettingsItemContainer = styled.div`
    width: 200px;
    height: 300px;
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
    position: fixed;
    bottom: -300px;
    left: 100px;
    transition: all 2s;

    &.isVisible {
        bottom: 0px;
    }

    z-index: 100;
`