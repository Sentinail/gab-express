import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AccountContainer } from './UserAccountStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import { apiEndpointContext } from '../../ContextProviders/APIEndpointsProvider'

function UserAccount() {
    const styles = useContext(stylesContext)
    const [recentActivities, setRecentActivities] = useState()
    const [data, setData] = useState([])
    const { search } = useParams()
    const API = useContext(apiEndpointContext)

    const getDatas = async () => {
        const user = await axios.get(`${API.gabExpressApi}/users/${search}`, {withCredentials: true, headers: {'ngrok-skip-browser-warning': true}})
        const user_transactions = await axios.post(`${API.gabExpressApi}/transactions`, {email_address: user.data.email_address}, {headers: {'ngrok-skip-browser-warning': true}})
        return {user_transactions: user_transactions.data.result,  user: user.data}
    }

    useEffect(() => {
        const fetchData = async () => {
            const { user, user_transactions } = await getDatas()
            setRecentActivities(user_transactions)
            setData(user)
        };

        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <AccountContainer backgroundColor={styles.primaryColor} secondaryColor={styles.supportingColor}>
            <div className='userContainer'>
            <div className='left'>
                <img src={`${API.gabExpressApi}/user-images/${data.user_profile_name}`} alt="" />
                <div className="member-since info-container">
                <p className='user-info'> {data.member_since} </p>
                </div>
                <div className="total-donation info-container">
                <p className='user-info'> {data.total_donation}$ </p>
                </div>
            </div>
            <div className='middle'>
                <div className="container">
                <p> FULL NAME </p>
                <div className="full-name info-container">
                    <p className='user-info'> {data.first_name} {data.last_name} </p>
                </div>
                </div>
                <div className="container">
                <p>USERNAME</p>
                <div className="username info-container">
                    <p className='user-info'> {data.user_name} </p>
                </div>
                </div>
                <div className="container ">
                <p>EMAIL ADDRESS</p>
                <div className="email-address info-container">
                    <p className='user-info'> {data.email_address} </p>
                </div>
                </div>
                <div className="container">
                <p>RECENT ACTIVITIES</p>
                <div className="recent-activity info-container">
                    {recentActivities && recentActivities.map((transaction_data) => {
                       return <p key={transaction_data.id} className='user-info'> {`${data.user_name} donated ${transaction_data.item_name} with a total of  ${transaction_data.quantity * transaction_data.price}$ to 
                       ${transaction_data.donation_place} on ${transaction_data.createdAt} [${transaction_data.status}]`} </p>
                    })}
                </div>
                </div>
            </div>
            <div className='right'>
                <div className='container about-me info-container'>
                <h1> ABOUT ME </h1>
                <p className='user-info'> 
                    {data.about_user}
                </p>
                </div>
            </div>
            </div>
        </AccountContainer>
    )
}

export default UserAccount