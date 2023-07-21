import React, { useContext, useEffect } from 'react'
import { authContext } from '../../ContextProviders/AuthProvider'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import { useNavigate } from 'react-router-dom'
import { AccountContainer, LogoutButton } from './MyAccountStyles'
import axios from 'axios'


function MyAccount() {
  const styles = useContext(stylesContext)
  const { userInformation, isAuth, setIsAuth} = useContext(authContext)
  const navigate = useNavigate()

  const logout = async () => {
      await axios.get("http://localhost:9000/users/logout", {withCredentials: true})
      setIsAuth(false)

      navigate("/home")
  }

  useEffect(() => {
    isAuth ? navigate("/myaccount") : navigate("/home")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return (
      <AccountContainer backgroundColor={styles.primaryColor} secondaryColor={styles.supportingColor}>
        { !isAuth ? <h1> Please Login First </h1> : 
        <div className='userContainer'>
          <div className='left'>
            <div className="left-container">
              <img src={require("../../Assets/Images/Di_ko_na_alam_pinaggagagawa_ko2.png")} alt="" />
              <div className="member-since info-container">
                <p className='user-info'> {userInformation.member_since} </p>
              </div>
              <div className="total-donation info-container">
                <p className='user-info'> {userInformation.total_donation}$ </p>
              </div>
            </div>
            {
            isAuth && 
            <LogoutButton backgroundColor={styles.secondaryColor} onClick={() => {logout()}}>
              <p className="logout"> Logout </p>
            </LogoutButton>
            }
            
          </div>
          <div className='middle'>
            <div className="container">
              <p> FULL NAME </p>
              <div className="full-name info-container">
                <p className='user-info'> {userInformation.first_name} {userInformation.last_name} </p>
              </div>
            </div>
            <div className="container">
              <p>USERNAME</p>
              <div className="username info-container">
                <p className='user-info'> {userInformation.user_name} </p>
              </div>
            </div>
            <div className="container ">
              <p>EMAIL ADDRESS</p>
              <div className="email-address info-container">
                <p className='user-info'> {userInformation.email_address} </p>
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
                {userInformation.about_user}
              </p>
            </div>
          </div>
        </div>
        }
      </AccountContainer>
    )
}

export default MyAccount