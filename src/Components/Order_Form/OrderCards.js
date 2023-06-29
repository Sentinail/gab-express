import React, { useContext } from 'react'
import { OrderCardContainer} from './OrderCardsStyles'
import { stylesContext } from '../../ContextProviders/StylesProvider'

function OrderCards(props) {
    const {id, img, price} = props
    const styles = useContext(stylesContext)

    return (
        <OrderCardContainer key={id} backgroundColor={styles.primaryColor} secondaryColor={styles.secondaryColor}>
            <img src={img} alt={id}></img>
            <p className='price'> {price}$ </p>
            <input type='number' placeholder='QUANTITY'></input>
            <button> MAKE PAYMENT </button>
        </OrderCardContainer>
    )
}

export default OrderCards