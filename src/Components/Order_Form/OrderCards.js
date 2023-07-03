import React, { useContext, useState, useRef } from 'react'
import { OrderCardContainer} from './OrderCardsStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import { authContext } from '../../ContextProviders/AuthProvider'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function OrderCards(props) {
    const {id, img, price} = props
    const styles = useContext(stylesContext)
    const { isAuth } = useContext(authContext)
    const [quantity, setQuantity] = useState(0);
    const ref = useRef()
    const navigate = useNavigate()


    const makePayment = (id, quantity) => {
        if ( isAuth ) {
            if (quantity > 0) {
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
        } else {
            alert("Please Login First")
            navigate("/login")
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