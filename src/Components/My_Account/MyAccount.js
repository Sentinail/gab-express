import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { authContext } from '../../ContextProviders/AuthProvider'
import { useNavigate } from 'react-router-dom'

const MyAccountContainer = styled.div`
  width: 100%;
  height: 100px;
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;

  & * {
    color: #FFFFFF;
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
      background-color: white;
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
        background-color: #2F2E2E;
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
          background-color: #2F2E2E;
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
        background-color: #2F2E2E;
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
  const { userInformation, isAuth} = useContext(authContext)
  const navigate = useNavigate()

  useEffect(() => {
    isAuth ? navigate("/myaccount") : navigate("/home")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
      <MyAccountContainer>
        { !isAuth ? <h1> Please Login First </h1> : 
        <div className='userContainer'>
          <div className='left'>
            <img src={require("../../Assets/Images/Di_ko_na_alam_pinaggagagawa_ko.png")} alt="" />
            <div className="member-since">
              <p> {userInformation.memberSince} </p>
            </div>
            <div className="total-donation">
              <p> {userInformation.totalDonation}$ </p>
            </div>
          </div>
          <div className='middle'>
            <div className="container">
              <p> Full Name </p>
              <div className="full-name">
                <p> {userInformation.fullName} </p>
              </div>
            </div>
            <div className="container">
              <p>Username</p>
              <div className="username">
                <p> {userInformation.userName} </p>
              </div>
            </div>
            <div className="container ">
              <p>Email Address</p>
              <div className="email-address">
                <p> {userInformation.emailAddress} </p>
              </div>
            </div>
            <div className="container">
              <p>Recent Activities</p>
              <div className="recent-activity">
                <p> Place Holder </p>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='container about-me'>
              <h1> About Me </h1>
              <p> Place Holder </p>
            </div>
          </div>
        </div>
        }
      </MyAccountContainer>
    )
}

export default MyAccount