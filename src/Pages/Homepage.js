import { useState } from "react";
import ListedItems from "../Components/ListedItems";
import Nav from "../Components/Nav";
import "../css/Homepage.css";
import "../css/Nav.css";

const Homepage = (props) => {
  return (
    <div className="home-image-container">
      <ListedItems
        listedItems={props.listedItems}
        setCartItems={props.setCartItems}
        cartItems={props.cartItems}
        url={props.url}
        getAvailableItems={props.getAvailableItems}
      />
    </div>
  );
};

export default Homepage;
