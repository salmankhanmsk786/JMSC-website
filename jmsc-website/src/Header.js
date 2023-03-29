import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


function Header() {
  return (
    <div className = "header">
        <img 
            className = "header_logo"
            img src= '/assets/images/JMSC4.png'
    
    />
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

            <div className = "header_optionBasket">
            <ShoppingBagIcon />
            <span className="header_optionLineTwo header_basketCount" >0</span>
            </div>

        </div>
    
    </div>
  )
}

export default Header