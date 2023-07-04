import React, { useState } from 'react'
import { OrderFormContainer } from './OrderFormStyles'
import OrderCards from './OrderCards'
import Select from './Select' 
import orderCardDatasObj from './OrderCardDatas'

function OrderForm() {
  const [ placeToDonate, setPlaceToDonate ] = useState(null)

  return (
    <OrderFormContainer img={require("../../Assets/Images/grocery_1.png")}>
      <div className="donate-top">
        <h1> DONATE NOW </h1>
        <Select setPlaceToDonate={setPlaceToDonate}></Select>
      </div>
      <div className='donate-bottom'>
        {orderCardDatasObj.map(data => {return <OrderCards placeToDonate={placeToDonate} key={data.id} id={data.id} img={data.img} price={data.price}></OrderCards>})}
      </div>
    </OrderFormContainer>
  )
}

export default OrderForm