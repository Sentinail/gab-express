import styled from "styled-components";

export const TopDonorsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};;

    & .board {
        margin-top: 100px;
        margin-bottom: 100px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 60px;
        animation: fadeIn 0.5s ease-in-out;

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-50px);}
            to { opacity: 1; transform: translateY(0px);}
        }

        & .title {
            font-size: 6rem;
        }

        & .cells {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;

            & p {
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            }
        }
    }
`   

export const TopDonorCellStyle = styled.div`
    width: 100%;
    min-width: 300px;
    max-width: 900px;
    height: 80px;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #FFFFFF;
    position: relative;

    transition: all 0.2s ease-in-out;

    & .name {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 30px;
    }   

    & .total-donation {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translateY(-50%) translateX(50%);

    }

    & .rank-num {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 30px;

    }

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`