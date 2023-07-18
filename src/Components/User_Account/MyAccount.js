import React, { useContext, useEffect } from 'react'
import { authContext } from '../../ContextProviders/AuthProvider'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import { useNavigate } from 'react-router-dom'
import { AccountContainer } from './AccountStyles'

function MyAccount() {
  const styles = useContext(stylesContext)
  const { userInformation, isAuth} = useContext(authContext)
  const navigate = useNavigate()

  useEffect(() => {
    isAuth ? navigate("/myaccount") : navigate("/home")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
      <AccountContainer backgroundColor={styles.primaryColor} secondaryColor={styles.supportingColor}>
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
      </AccountContainer>
    )
}

export default MyAccount