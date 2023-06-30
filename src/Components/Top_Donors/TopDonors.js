import React from 'react'
import { TopDonorsContainer, TopDonorCellStyle } from './TopDonorsStyles'

export const TopDonorCell = (props) => {

  return (
    <TopDonorCellStyle>
      <p>Jennie Nichols</p>
      <p>$1000</p>
      <p>#1</p>
    </TopDonorCellStyle>
  )
}

function TopDonors() {
  return (
    <TopDonorsContainer>

    </TopDonorsContainer>
  )
}

export default TopDonors