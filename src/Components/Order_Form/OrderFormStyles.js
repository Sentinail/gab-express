import styled from "styled-components";

export const OrderFormContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${props => {return props.img}});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

    & .donate-top {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
        gap: 100px;

        & h1, select {
            animation: fadeIn 0.5s ease-in-out;

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-50px);}
                to { opacity: 1; transform: translateY(0px);}
            }
        }

        

        & h1 {
            color: #FFFFFF;
            font-size: 6rem;
            letter-spacing: 2.5px;
        }
    }

    & .donate-bottom {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        align-items: center;
        padding: 50px;
        gap: 100px;
    }
`