/*
4/3/2023
Salman Khan
This code is for the header of the website. Includes
our own logo, and the items we wish to sell to customers
The images of our items will be in the public folder under assets
Includes the button to go to cart when customer is done shopping
and the search bar when customer wants to look for a specific item.
Login can also be accessed here

 */
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

  const [{cart, user}, dispatch] = useStateValue();
  
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  return (
    <div className = "header">

//header logo      
        <Link to ="/">
            <img 
            className = "header_logo"
            img src= '/assets/images/JMSC4.png'/>
          
        </Link>
      
    
//header search    
        <div className = "header_search">
          <input
          className="header_searchInput" type= "text"/>
          <SearchIcon
          className= "header_searchIcon" />

        </div>
        <div className="header_nav">
            <Link to = {!user && "/login"}>
            <div onClick = {handleAuthentication}
            className="header_option">

            <span className='header_optionlineone'> Hello Guest </span>
            <span className='header_optionlineTwo'> 
            {user ? 'Sign Out' : 'Sign In'}</span>
            
            </div>
            </Link>

            <div className="header_option">

            <span className='header_optionlineone'> Return </span>
            <span className='header_optionlineTwo'> & Orders</span>
                
            </div>
            
            <div className="header_option">

            <span className='header_optionlineone'> Your </span>
            <span className='header_optionlineTwo'> JMSC</span>
                
            </div>

            <Link to="/checkout">
            <div className = "header_optionBasket">
            <ShoppingBagIcon />
            <span className="header_optionLineTwo header_basketCount" > 
            {cart?.length} //Optional chaining
            </span>
            </div>
            
            </Link>

        </div>
    
    </div>
  )
}
}
export default Header
