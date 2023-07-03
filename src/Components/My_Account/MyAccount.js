import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { authContext } from '../../ContextProviders/AuthProvider'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import { useNavigate } from 'react-router-dom'

const MyAccountContainer = styled.div`
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

function MyAccount() {
  const styles = useContext(stylesContext)
  const { userInformation, isAuth} = useContext(authContext)
  const navigate = useNavigate()

  useEffect(() => {
    isAuth ? navigate("/myaccount") : navigate("/home")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
      <MyAccountContainer backgroundColor={styles.primaryColor} secondaryColor={styles.supportingColor}>
        { !isAuth ? <h1> Please Login First </h1> : 
        <div className='userContainer'>
          <div className='left'>
            <img src={require("../../Assets/Images/Di_ko_na_alam_pinaggagagawa_ko2.png")} alt="" />
            <div className="member-since info-container">
              <p className='user-info'> {userInformation.memberSince} </p>
            </div>
            <div className="total-donation info-container">
              <p className='user-info'> {userInformation.totalDonation}$ </p>
            </div>
          </div>
          <div className='middle'>
            <div className="container">
              <p> FULL NAME </p>
              <div className="full-name info-container">
                <p className='user-info'> {userInformation.fullName} </p>
              </div>
            </div>
            <div className="container">
              <p>USERNAME</p>
              <div className="username info-container">
                <p className='user-info'> {userInformation.userName} </p>
              </div>
            </div>
            <div className="container ">
              <p>EMAIL ADDRESS</p>
              <div className="email-address info-container">
                <p className='user-info'> {userInformation.emailAddress} </p>
              </div>
            </div>
            <div className="container">
              <p>RECENT ACTIVITIES</p>
              <div className="recent-activity info-container">
                <p className='user-info'> Lorem ipsum dolor sit amet </p>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='container about-me info-container'>
              <h1> ABOUT ME </h1>
              <p className='user-info'> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        }
      </MyAccountContainer>
    )
}

export default MyAccount