import styled from 'styled-components'

export const AccountContainer = styled.div`
  width: 100%;
  height: 100px;
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: ${props => {return `rgb(${props.secondaryColor[0]}, ${props.secondaryColor[1]}, ${props.secondaryColor[2]}, ${props.secondaryColor[3]})`}};

  & * {
    color: #FFFFFF;
  }

  & .user-info {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  & .info-container {
    background-color: ${props => {return `rgb(${props.backgroundColor[0]}, ${props.backgroundColor[1]}, ${props.backgroundColor[2]}, ${props.backgroundColor[3]})`}};
  }

  & .userContainer {
    width: 100%;
    height: 100%;
    display: flex;

    & .left, .middle, .right {
      flex-direction: column;
      padding: 20px;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: 20px;

      animation: fadeIn 0.5s ease-in-out;

      @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-50px);}
          to { opacity: 1; transform: translateY(0px);}
      }
    }

    & .left {
      flex-direction: column;
      display: flex;
      align-items: center;
      width: 100%;
      height: auto;
      gap: 20px;

      & img {
        display: block;
        width: 80%;
        max-width: 300px;
        min-width: 300px;
        aspect-ratio: 1/1;
        border-radius: 20px;
      }

      & div {
        width: 100%;
        max-width: 400px;
        height: 50px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    & .middle {

      & .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height  : 50px;
        display: flex;
        align-items: center;

        & p {
          color: #2F2E2E
        }

        & div {
          width: 100%;
          min-height: 50px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 400px;

          & p {
            color: #FFFFFF;
          }
        }
      }
    }

    & .right {

      & .container {
        padding: 20px;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        max-width: 500px;
        & * {
          color: #FFFFFF;
        }
      }
    }

    @media screen and (max-width: 992px) {
      flex-direction: column;
    }
  }
`