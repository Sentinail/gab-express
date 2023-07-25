import React, { useState, useEffect, useContext } from 'react'
import { OrderFormContainer } from './OrderFormStyles'
import OrderCards from './OrderCards'
import Select from './Select' 
import axios from 'axios'
import { apiEndpointContext } from '../../ContextProviders/APIEndpointsProvider'

function OrderForm() {
  const [ placeToDonate, setPlaceToDonate ] = useState(null)
  const [itemDatas, setItemDatas] = useState()
  const API = useContext(apiEndpointContext)

  const getItemDatas = async () => {
    try {
      const result = await axios.get(
        API.gabExpressApi + "/items", 
          {
            headers: {
              'ngrok-skip-browser-warning': true
            }
          },
        )
      return result.data
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getItemDatas()
    .then(res => {
      setItemDatas(res)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <OrderFormContainer img={require("../../Assets/Images/grocery_1.png")}>
      <div className="donate-top">
        <h1> DONATE NOW </h1>
        <Select setPlaceToDonate={setPlaceToDonate}></Select>
      </div>
      <div className='donate-bottom'>
        {
          itemDatas && 
          itemDatas.map((data) => { return (
          <OrderCards 
            placeToDonate={placeToDonate} 
            key={data.item_id} 
            id={data.item_id} 
            img={{item_name: data.item_name, extension_name: data.extension_name}} 
            price={data.item_price}>
          </OrderCards>
          )})
        }
      </div>
    </OrderFormContainer>
  )
}

export default OrderForm