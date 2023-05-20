/*Salman Khan, Mauricio Gonzalez
4/10/2023
This code implements what the customer will see 
when in the checkout page
cart.map is the function that keeps track of the items
in the cart as an array
*/ 
import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

//checkout function
function Checkout() {
  const [{cart, user}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <div className="checkout_title">
          <h3>Hello, {user?.email}</h3>
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

      <div className="checkout_right">
        <Subtotal />
        <h2>Your subtotal : </h2>
      </div>
    </div>
  );
}

export default Checkout;
