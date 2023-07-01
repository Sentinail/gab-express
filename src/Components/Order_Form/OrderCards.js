import React, { useContext, useState, useRef } from 'react'
import { OrderCardContainer} from './OrderCardsStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import axios from "axios"

function OrderCards(props) {
    const {id, img, price} = props
    const styles = useContext(stylesContext)
    const [quantity, setQuantity] = useState(0);
    const ref = useRef()


    const makePayment = (id, quantity) => {
        if (quantity) {
            axios.post("http://localhost:5000/create-checkout-session", {
            item: {
                id: id,
                quantity: quantity
            }
            }).then(res => {
                window.location.href = res.data.url
            }).catch(err => {
                console.log(id, `${price}$`)
                alert(err)
            })
        } else {
            alert("Invalid Quantity")
        }
    }

    return (
        <OrderCardContainer key={id} backgroundColor={styles.primaryColor} secondaryColor={styles.secondaryColor}>
            <img src={img} alt={id}></img>
            <p className='price'> {price}$ </p>
            <input ref={ref} type='number' placeholder='QUANTITY' onChange={() => {setQuantity(ref.current.value)}}></input>
            <button onClick={() => {makePayment(id, quantity)}}> MAKE PAYMENT </button>
        </OrderCardContainer>   
    )
}

export default OrderCards