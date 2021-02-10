import { useState } from "react";
import Item from '../Components/Item'
import '../css/Homepage.css'

const Homepage = () => {


  return (
    <>
      <div className="home-container">
        <div className="logo-container"></div>
        <h1 className="title-text">
          Gimme<span className="dot">.</span>it
        </h1>
      </div>
      <div className="image-container">
        <Item />
      </div>
    </>
  );
};

export default Homepage;
