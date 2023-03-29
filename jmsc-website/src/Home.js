import React from 'react';
import "./Home.css";
import Product from './Product';


function Home() {
  return (
    <div className = "Home">
      <div className = "home__container">
        <img
          className="home__image"
          img src= '/assets/images/Home1.png'
          alt=""
        />

         <div className="home_row">
          <Product />
          <Product />

          {/*<Product />*/}
        </div>

        <div className="home_row">
          {/*<Product />*/}
          {/*<Product />*/}
          {/*<Product />*/}
          </div>  
        
        <div className="home_row">
          {/*<Product />*/}

        </div> 

    </div>
  </div>  
  );
}

export default Home;