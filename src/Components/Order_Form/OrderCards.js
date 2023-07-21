import React, { useContext, useState, useRef } from 'react'
import { OrderCardContainer } from './OrderCardsStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import { authContext } from '../../ContextProviders/AuthProvider'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function OrderCards(props) {
    const { id, img, price, placeToDonate } = props
    const styles = useContext(stylesContext)
    const { isAuth } = useContext(authContext)
    const [quantity, setQuantity] = useState(0);
    const ref = useRef()
    const navigate = useNavigate()
    console.log()

    const changeQuantity = (value) => {
        // Prevent non-numeric characters and negative values
        const numericValue = value.replace(/[^0-9]/g, '');
        setQuantity(numericValue)
    }

    const makePayment = (id, quantity) => {
        console.log(placeToDonate)
        if (isAuth && placeToDonate) {
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
        } else if (!isAuth) {
            alert("Please Login First")
            navigate("/login")
        } else if (!placeToDonate) {
            alert("Please Input The Place")
        }

    }

    return (
        <OrderCardContainer key={id} backgroundColor={styles.primaryColor} secondaryColor={styles.secondaryColor}>
            <img src={img} alt={id}></img>
            <label className='price'> {price}$ </label>
            <input
                ref={ref}
                type='text'
                placeholder='QUANTITY'
                value={quantity}
                onChange={(e) => { changeQuantity(e.target.value) }}
                onKeyDown={(e) => {
                    // Prevent "e", "-", and "+" characters
                    if (e.key === 'e' || e.key === '-' || e.key === '+') {
                        e.preventDefault();
                    }
                }}
            ></input>
            <button onClick={() => { makePayment(id, quantity) }}> MAKE PAYMENT </button>
        </OrderCardContainer>
    )
}

export default OrderCards
