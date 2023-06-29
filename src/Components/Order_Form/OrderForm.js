import React from 'react'
import { OrderFormContainer } from './OrderFormStyles'
import OrderCards from './OrderCards'
import Select from './Select' 
import orderCardDatasObj from './OrderCardDatas'
function OrderForm() {

  return (
    <OrderFormContainer img={require("../../Assets/Images/grocery_1.png")}>
      <div className="donate-top">
        <h1> DONATE NOW </h1>
        <Select></Select>
      </div>
      <div className='donate-bottom'>
        {orderCardDatasObj.map(data => {return <OrderCards key={data.id} img={data.img} price={data.price}></OrderCards>})}
      </div>
    </OrderFormContainer>
  )
}

export default OrderForm