import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    min-height: 1440px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .section-container {
        z-index: 10;
        position: relative;
    }
`

export const SectionContainer = styled.div`
    * {
        transition: all 1s;
    }

    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
    padding: 30px;

    & .items-container {
        width: 100%;
        min-width: 200px;
        height: auto;
        display: flex;
        flex-direction: ${props => {return props.flexDirection}};
        justify-content: center;
        align-items: center;
        position: relative; 
        gap: 100px;

        & img {
            display: block;
            width: 100%;
            min-width: 300px;
            max-width: 600px;
            border-radius: 20px;
            aspect-ratio: 3 / 2;
        }
        & .content-container {
            & h1 {
                font-family: sans-serif ;
                text-align: center;
                font-size: 3rem;
            }

            & p {
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                font-size: 2rem;
            }
            height: 100%;
            width: 100%;
            min-width: 500px;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;

            @media screen and (max-width: 576px) {
                & {
                    min-width: 300px;
                }

                & h1 {
                    font-family: sans-serif ;
                    text-align: center;
                    font-size: 2rem;
                }
                & p {
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    font-size: 1rem;
                }
                
            }
        }
        @media screen and (max-width: 1000px) {
            & {
                flex-direction: column
            }
        }
    }

    & .items-container.animated-slide {
        top: 100px;
        opacity: 0;
    }

    & .items-container.animated-slide.slide {
        top: 0px;
        opacity: 1;
    }
`

export const IntroductionContainer = styled.div`
    background-image: url(${props => {return props.img}});
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 50px;
    position: relative;
    animation: fadeIn 0.5s ease-in-out;
    z-index: 1;

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-50px);}
        to { opacity: 1; transform: translateY(0px);}
    }

    & {
        h1:nth-child(1) {
            font-size: 12rem;
        }

        h1:nth-child(2) {
            font-size: 5rem;
        }

        h1 {
            color: white;
        }
        
    }

    & img {
        height: 67.2px;
        width: 50px;
        position: absolute;
        bottom: 50px;
        right: 50px;
    }

    @media screen and (max-width: 768px) {
        & h1:nth-child(1) {
            font-size: 9rem;
        }

        & h1:nth-child(2) {
            font-size: 3.75rem;
        }
    }

    @media screen and (max-width: 768px) {
        & h1:nth-child(1) {
            font-size: 6rem;
        }

        & h1:nth-child(2) {
            font-size: 2.5rem;
        }
    }
`

export const InterestedToHelpSection = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 100px;
    font-size: 3em;
    position: relative;
    
    & h1 {
        font-size: 6rem;
        text-align: center;
    }

    & button {
        transition: all 0.2s;
        font-size: 3rem;
        
    }

    & img {
        position: absolute;
        bottom: 30px;
        left: -100px;
        width: 100px;
        transition: all 5s linear;
    }

    & img.move {
        animation: move 15s linear infinite;

        @keyframes move {
            0% {
                left: -100px;
                transform: scaleX(1);
            }
            25% {
                left: 100%;
                transform: scaleX(1);
            }
            50% {
                left: 100%;
                transform: scaleX(-1);
            }
            75% {
                left: -100px;
                transform: scaleX(-1);
            }
            100% {
                left: -100px;
                transform: scaleX(1);
            }
        }
    }
    @media screen and (max-width: 400px) {
        & h1 {
            font-size: 5rem;
        }
    }
`

export const DonateNowButton = styled.button`
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