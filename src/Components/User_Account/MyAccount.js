import React, { useContext, useState, useEffect } from 'react'
import { authContext } from '../../ContextProviders/AuthProvider'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import { useNavigate } from 'react-router-dom'
import { AccountContainer, LogoutButton, UpdateButton } from './MyAccountStyles'
import axios from 'axios'
import { apiEndpointContext } from '../../ContextProviders/APIEndpointsProvider'
import { Outlet } from 'react-router-dom'


function MyAccount() {
  const styles = useContext(stylesContext)
  const API = useContext(apiEndpointContext)
  const { userInformation, isAuth, setIsAuth} = useContext(authContext)
  const [recentActivities, setRecentActivities] = useState()
  const [imageData, setImageData] = useState()
  const navigate = useNavigate()

  const handleLogout = async () => {
      await axios.get(API.gabExpressApi + "/users/logout", {withCredentials: true, headers: {'ngrok-skip-browser-warning': true}})
      setIsAuth(false)

      navigate("/home")
  }

  const handleUpdate = () => {
    navigate("edit")
  }

  const getDatas = async () => {
    try {
      const user_transactions = await axios.post(`${API.gabExpressApi}/transactions`, {email_address: userInformation.email_address}, {withCredentials: true, headers: {'ngrok-skip-browser-warning': true}})
      const response = await axios.post(`${API.gabExpressApi}/images/user-images`, {
        email_address: userInformation.email_address
      } ,{
        responseType: 'blob',
        headers: {'ngrok-skip-browser-warning': true}
      });
      setImageData(URL.createObjectURL(response.data));
      return {user_transactions: user_transactions.data.result}
    } catch (err) {
    }
  }

  useEffect(() => {
    const getUserTransactions = async () => {
      const transaction = await getDatas()
      if (transaction) {
        const user_transactions = transaction.user_transactions
        setRecentActivities(user_transactions)
      }
    }

    getUserTransactions()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInformation])

    return (
      <>
        <AccountContainer backgroundColor={styles.primaryColor} secondaryColor={styles.supportingColor}>
          { !isAuth ? <h1 style={{color: "black"}}> Please Login First </h1> : 
          <div className='user-wrapper'>
            <div className='userContainer'>
              <div className='left'>
                <div className="left-container">
                  <img src={imageData} alt="user-profile" />
                  <div className="member-since info-container">
                    <p className='user-info'> {userInformation.member_since} </p>
                  </div>
                  <div className="total-donation info-container">
                    <p className='user-info'> {userInformation.total_donation}$ </p>
                  </div>
                </div>
                {
                isAuth && 
                <>
                  <UpdateButton backgroundColor={styles.secondaryColor} onClick={() => {handleUpdate()}}>
                    <p className='update'> Update </p>
                  </UpdateButton>
                  <LogoutButton backgroundColor={styles.secondaryColor} onClick={() => {handleLogout()}}>
                    <p className="logout"> Logout </p>
                  </LogoutButton>
                </>
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
                <div className="container ">
                  <p>RECENT ACTIVITIES</p>
                  <div className="recent-activity info-container">
                    {recentActivities && recentActivities.map((transaction_data) => {
                       return <p key={transaction_data.id} className='user-info'> {`${userInformation.user_name} donated ${transaction_data.item_name} with a total of ${transaction_data.quantity * transaction_data.price}$ to 
                       ${transaction_data.donation_place} on ${transaction_data.createdAt} [${transaction_data.status}]`} </p>
                    })}
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
            <Outlet></Outlet>
          </div>
          }
        </AccountContainer>
      </>
    )
}

export default MyAccount