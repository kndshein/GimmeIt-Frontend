import { useState } from "react";
import Item from '../Components/Item'
import ListedItems from '../Components/ListedItems'
import Nav from "../Components/Nav";
import '../css/Homepage.css'
import '../css/Nav.css'

const Homepage = (props) => {
  return (
    <>
      <div className="home-container">
        <div className="logo-container">
          <h1 className="title-text">
            Gimme<span className="dot">.</span>it
          </h1>
        </div>
        <Nav/>
      </div>
      <div className="image-container">
        <ListedItems listedItems={props.listedItems} />
        {/* <Item/> */}
      </div>
    </>
  );
};

export default Homepage;
