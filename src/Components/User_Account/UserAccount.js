import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AccountContainer } from './AccountStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import { apiEndpointContext } from '../../ContextProviders/APIEndpointsProvider'

function UserAccount() {
    const styles = useContext(stylesContext)
    const [data, setData] = useState([])
    const { search } = useParams()
    const API = useContext(apiEndpointContext)

    const getUser = async () => {
        const user = await axios.get(`${API.gabExpressApi}/users/${search}`)
        return user.data
    }

    useEffect(() => {
        getUser().then(res => {setData(res)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <AccountContainer backgroundColor={styles.primaryColor} secondaryColor={styles.supportingColor}>
            <div className='userContainer'>
            <div className='left'>
                <img src={require("../../Assets/Images/Di_ko_na_alam_pinaggagagawa_ko2.png")} alt="" />
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
                    <p className='user-info'> Lorem ipsum dolor sit amet </p>
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