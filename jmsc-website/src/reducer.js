/*
4/14/2023
Cheol Han, Salman Khan, 
Joshua Santillan, Mauricio Gonzalez
Contains the code that will allow for the cart to show 
the customer their total
Allows for the customer to remove items from cart as well
Contains important if statements that will track if an item is in the cart
which will then allow it to be removed if desired
The cart is implemented as an array of the items that the customer will add to their 
cart
 */
export const initialState = {
    cart: [],
    user: null
};
//Selector
export const getBasketTotal = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0); //Optional chaining

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };

        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];

            if (index >= 0 ) {
                newCart.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove item (id: ${action.id}) as its not
                    in cart!`
                )
            }

            return {
                ...state,
                cart: newCart
            }

            case "SET_USER":
                return {
                    ...state,
                    user: action.user
                }


        default:
            return state;
    }

};

export default reducer;

