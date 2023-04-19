import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';

function Header() {
    const [{cart}, dispatch] = useStateValue();

  return (
    <div className = "header">

      
        <Link to ="/">
            <img 
            className = "header_logo"
            img src= '/assets/images/JMSC4.png'/>
          
        </Link>
      
    
    
        <div className = "header_search">
          <input
          className="header_searchInput" type= "text"/>
          <SearchIcon
          className= "header_searchIcon" />

        </div>
        <div className="header_nav">
            <div className="header_option">

            <span className='header_optionlineone'> Hello Guest </span>
            <span className='header_optionlineone'> Sign in</span>
            
            </div>

            <div className="header_option">

            <span className='header_optionlineone'> Return </span>
            <span className='header_optionlineone'> & Orders</span>
                
            </div>
            
            <div className="header_option">

            <span className='header_optionlineone'> Your </span>
            <span className='header_optionlineone'> JMSC</span>
                
            </div>

            <Link to="/checkout">
            <div className = "header_optionBasket">
            <ShoppingBagIcon />
            <span className="header_optionLineTwo header_basketCount" > {cart?.length}  </span>
            </div>
            
            </Link>

        </div>
    
    </div>
  )
}

export default Header
