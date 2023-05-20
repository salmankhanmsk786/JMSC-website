/*
4/3/2023
Salman Khan, Cheol Han, Joshua Santillan
This is the code for the hompage of our website. Includes the items that are
dispalyed on there with its price, image, and rating given to that item. 
 */
import React from "react";
import "./Home.css";
import Product from "./Product";
//home function
function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img className="home_image" img src="/assets/images/Home1.png" alt="" />

        <div className="home_row">
          <Product
            title="Holographic Skull Dad Hat"
            price={25.0}
            image="/assets/images/skull hat.png"
            alt=""
            rating={5}
          />
          <Product
            title="Alien Dad Hat"
            price={25.0}
            image="/assets/images/alien hat.jpg"
            alt=""
            rating={5}
          />

          <Product
            title="Dripping face Dad Hat"
            price={25.0}
            image="/assets/images/Dripping face.jpg"
            alt=""
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            title="Dripping face Dad Hat"
            price={25.0}
            image="/assets/images/Dripping face.jpg"
            alt=""
            rating={5}
          />
          <Product
            title="Dripping face Dad Hat"
            price={25.0}
            image="/assets/images/Dripping face.jpg"
            alt=""
            rating={5}
          />
          <Product
            title="Dripping face Dad Hat"
            price={25.0}
            image="/assets/images/Dripping face.jpg"
            alt=""
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            title="Dripping face Dad Hat"
            price={25.0}
            image="/assets/images/Dripping face.jpg"
            alt=""
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
