import styled from "styled-components";

export const SettingsItemContainer = styled.div`
    width: 200px;
    height: 300px;
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
    background-color: rgb(0, 0, 0, 0.8);
    position: fixed;
    bottom: -300px;
    left: 100px;
    transition: all 2s;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;

    & * {
        transition: all 0.1s ease-in;
    }

    & p {
        font-size: 1.5rem;
        width: 100%;
        padding: 10px;
        background-color: #FFFFFF;
        border-radius: 20px;
        text-align: center;

        &:hover {
            cursor: pointer;
            transform: scale(1.1)
        }
    }

    &.isVisible {
        bottom: 0px;
    }

    z-index: 100;
`