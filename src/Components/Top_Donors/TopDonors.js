import React, { useContext, useState, useEffect } from 'react'
import { TopDonorsContainer, TopDonorCellStyle } from './TopDonorsStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { apiEndpointContext } from '../../ContextProviders/APIEndpointsProvider'

export const TopDonorCell = (props) => {
  const {name, totalDonation, rankNum, backgroundColor, user_id} = props
  const navigate = useNavigate()

  return (
    <TopDonorCellStyle backgroundColor={backgroundColor} onClick={() => {navigate(`/user/${user_id}`)}}>
      <p className='name'>{name}</p>
      <p className='total-donation'>${totalDonation}</p>
      <p className='rank-num'>#{rankNum}</p>
    </TopDonorCellStyle>
  )
}

function TopDonors() {
  const styles = useContext(stylesContext)
  const API = useContext(apiEndpointContext)
  const [data, setData] = useState()

  const getUsers = async () => {
    const users = await axios.get(API.gabExpressApi + "/users")
    return users.data
  }

  useEffect(() => {
    getUsers()
      .then(res => setData(res))
      .catch(error => console.log(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TopDonorsContainer backgroundColor={styles.supportingColor}>
      <div className='board'>
        <h1 className='title'>TOP DONORS</h1>
        <div className='cells'>
          {data ? data.map((user, index) => {return <TopDonorCell 
          key={index} 
          name={user.user_name} 
          totalDonation={user.total_donation} 
          rankNum={index + 1} 
          backgroundColor={(index + 1) % 2 === 0 ? styles.primaryColor : styles.secondaryColor}
          user_id={user.user_id}></TopDonorCell>}) : "False"}
        </div>
      </div>
    </TopDonorsContainer>
  )
}

export default TopDonors