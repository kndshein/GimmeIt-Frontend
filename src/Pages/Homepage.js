import { useState } from "react";
import Item from '../Components/Item'
import ListedItems from '../Components/ListedItems'
import '../css/Homepage.css'

const Homepage = (props) => {
  return (
    <>
    <div className="home-container">
      <div className="logo-container"></div>
      <h1 className="title-text">Gimme.it</h1>
    </div>
    <div className="image-container">
      <ListedItems listedItems={props.listedItems}/>
      <Item/>
    </div>
    </>
  );
};

export default Homepage;
