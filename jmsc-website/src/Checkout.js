import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{cart}, dispatch] = useStateValue();
  return (
    <div className='checkout'>

        <div className='checkout_left'>

            <div className='checkout_title'>
    
                <h2>Your shopping Cart</h2>
    
                         {cart.map(item => (
            <CheckoutProduct 
            id ={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ) )}

            </div>

        </div>


        <div className='checkout_right'>
            <h2>Your subtotal : </h2>
        
        </div>




    </div>
  )
}

export default Checkout
