/*
4/14/2023
Mauricio Gonzalez, Salman Khan,
Cheol Han, Joshua Santillan
Code that calculates the toal owed from the customer from adding the
price of all the items in the cart
Implements the cart array used in other files so that this file knows what the items cost
are and how to add it all together. 
Also includes the proceed to checkout button that the customer will use when the 
customer is done shopping. This is also where we use a library from react
that knows how to implement certian aspects of actual real world currency.
This is important as real world currency can get tricky when trying to implement 
into code

*/
import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the hw */}
              Subtotal ({cart.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
