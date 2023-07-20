import styled from "styled-components";

export const SettingsItemContainer = styled.div`
    width: 200px;
    min-height: 300px;  
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, 0.8)`}};
    position: fixed;
    top: 100%;
    left: 100px;
    transform: translateY(0%);
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
        transform: translateY(-100%);
    }

    z-index: 100;
`