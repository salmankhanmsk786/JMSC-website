/*
  4/10/2023
  Salman Khan, Mauricio Gonzalez
  Joshua Santillan, Cheol Han
  This code pertains to the actual items being sold
  on our website.
  This file contains the actual item object class constructor
  that contains the fields that will be shown
   on our website such as its name, a picture, price, etc.
  Also has the code for a button to be implemented underneath the picture
  of the item which will add that item to customers cart
 */
import React from 'react'
import "./Product.css";
import { useStateValue} from "./StateProvider";

function Product({ id, title, image, price, rating}) {
  const [{cart}, dispatch] = useStateValue();

  console.log("this is the cart >>> ", cart);
    const addToCart = () => {
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            
            <p className='product_price'>
               <small>$</small>
               <strong>{price}</strong>    
            </p>
            <div className='product_rating'>
              {Array(rating)
              .fill()
              .map((_,i) =>
                <p>⭐</p>)}
                

                
            </div>            

        </div>
      <img src= {image}/>

        <button onClick={addToCart}>Add to Cart</button>

    </div>
  )
}

export default Product
