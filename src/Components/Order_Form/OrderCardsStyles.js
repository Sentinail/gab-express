import styled from "styled-components";

export const OrderCardContainer = styled.div`
    width: 300px;
    min-height: 400px;
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 20px;
    border-radius: 20px;

    * {
    transition: all 0.2s;
    }
    

    & img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 20px;
    }

    & .price {
        width: 100%;
        text-align: center;
        background-color: #FFFFFF;
        font-size: 2rem;
    }

    & input {
        width: 100%;
        min-height: 30px;
        font-size: 2rem;
        text-align: center;
    }

    & button {
        min-width: 150px;
        min-height: 30px;
        font-size: 2rem;
        background-color: ${props => {return `rgb(${props.secondaryColor[0]}, ${props.secondaryColor[1]}, ${props.secondaryColor[2]}, ${props.secondaryColor[3]})`}};
        border: none;
        border-radius: 50px;
        color: #FFFFFF;
        padding: 10px;

        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
`