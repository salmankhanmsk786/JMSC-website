import React from 'react'
import "./Product.css";

function Product() {
  return (
    <div className='product'>
        <div className='product_info'>
            <p>Holographic skull Cap</p>
            
            <p className='product_price'>
               <small>$</small>
               <strong>25.00</strong>    
            </p>
            <div className='product_rating'>
                <p>⭐</p>
                

                
            </div>            

        </div>
        <img src='/assets/images/skull hat.png' alt=""/>

        <button>Add to Cart</button>

    </div>
  )
}

export default Product