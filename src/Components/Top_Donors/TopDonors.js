import React, { useContext, useState, useEffect } from 'react'
import { TopDonorsContainer, TopDonorCellStyle } from './TopDonorsStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import axios from 'axios'

export const TopDonorCell = (props) => {
  const {name, totalDonation, rankNum, backgroundColor} = props

  return (
    <TopDonorCellStyle backgroundColor={backgroundColor}>
      <p className='name'>{name}</p>
      <p className='total-donation'>${totalDonation}</p>
      <p className='rank-num'>#{rankNum}</p>
    </TopDonorCellStyle>
  )
}

function TopDonors() {
  const styles = useContext(stylesContext)
  const [data, setData] = useState()

  const getUsersSorted = async () => {
    const data = await axios.get("http://localhost:5000/users")
    const users = await data.data
    users.sort((a, b) => b.totalDonation - a.totalDonation);
    return users
    
  }

  useEffect(() => {
    getUsersSorted().then(res => {setData(res)})
  }, [])

  console.log(data)

 


  return (
    <TopDonorsContainer>
      <div className='board'>
        <h1 className='title'>TOP DONORS</h1>
        <div className='cells'>
          {data ? data.map((user, index) => {return <TopDonorCell 
          key={index} 
          name={user.fullName} 
          totalDonation={user.totalDonation} 
          rankNum={index + 1} 
          backgroundColor={(index + 1) % 2 === 0 ? styles.primaryColor : styles.secondaryColor}></TopDonorCell>}) : "False"}
        </div>
      </div>
    </TopDonorsContainer>
  )
}

export default TopDonors