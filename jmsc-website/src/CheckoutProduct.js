/*
4/12/2023
Mauricio Gonzalez, Cheol Han, 
Joshua Santillan, Salman Khan
Implements the information of an item in the cart
Also contains the code for the button to remove
an item from the cart
An array is implemented to keep track of the rating
of an item. Depending on the array the more stars
the item will have
 */
import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({id, image, title, price, rating}) {
    const [{cart}, dispatch] = useStateValue();
    
    const removeFromCart = () => {
        //this removes item from cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
    return (
        <div className = 'checkoutProduct'>
            <img className = 'checkoutProduct_image' src={image}
             />

             <div className = 'checkoutProduct_info'>
                <p className = 'checkoutProduct_title' >{title}</
                p>
                <p className = "checkoutProduct_price">
                    <small >$ </small>
                    <strong >{price}</strong>

                </p>
                <div className = "checkoutProduct_rating"> 
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p >⭐</p>
                    ) ) }

                </div>
                <button onClick={removeFromCart}> Remove from Cart</button>
             </div>

        </div>




    )
}

export default CheckoutProduct
