import React, { useContext, useState, useRef } from 'react'
import { OrderCardContainer, MessagePTag } from './OrderCardsStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import { authContext } from '../../ContextProviders/AuthProvider'
import axios from "axios"
import { apiEndpointContext } from '../../ContextProviders/APIEndpointsProvider'

function OrderCards(props) {
    const { id, img, price, placeToDonate } = props
    const API = useContext(apiEndpointContext)
    const styles = useContext(stylesContext)
    const { isAuth } = useContext(authContext)
    const [quantity, setQuantity] = useState('');
    const [message, setMessage] = useState("")
    const ref = useRef()
    const changeQuantity = (value) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        const nonZeroValue = numericValue.replace(/^0+/, '');
        setQuantity(nonZeroValue)
    }

    const makePayment = (id, quantity) => {
        if (!isAuth) {
            setMessage("Please Login First")
        } 
        
        else if (!placeToDonate) {
            setMessage("Please Input The Place")
        }

        else if (isAuth && placeToDonate) {
            if (quantity > 0) {
                axios.post(API.gabExpressApi + "/create-checkout-session", {
                    item: {
                        id: id,
                        quantity: quantity,
                        place_to_deliver: placeToDonate
                    }
                }, {withCredentials: true, headers: {'ngrok-skip-browser-warning': true}}).then(res => {
                    window.location.href = res.data.url
                }).catch(err => {
                    console.log(err)
                })
            } else {
                setMessage("Invalid Quantity")
            }
        }
    }

    return (
        <OrderCardContainer key={id} backgroundColor={styles.primaryColor} secondaryColor={styles.secondaryColor}>
            <img src={`${API.gabExpressApi}/food-item-images/${img.item_name}_${id}${img.extension_name}`} alt={id}></img>
            <label className='price'> {price}$ </label>
            <input
                onFocus={ ()=> {setMessage("")}}
                ref={ref}
                type='text'
                placeholder='QUANTITY'
                value={quantity}
                onChange={(e) => { changeQuantity(e.target.value) }}
                onKeyDown={(e) => {
                    if (e.key === 'e' || e.key === '-' || e.key === '+') {
                        e.preventDefault();
                    }
                }}
            ></input>
            <MessagePTag textColor={styles.secondaryColor}> {message} </MessagePTag>
            <button onClick={() => { makePayment(id, quantity) }}> MAKE PAYMENT </button>
        </OrderCardContainer>
    )
}

export default OrderCards
