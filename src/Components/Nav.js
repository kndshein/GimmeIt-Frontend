import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/post">
        <div>Post</div>
      </Link>
      <Link to="/profile">
        <div>Profile</div>
      </Link>
      <Link to="/cart">
        <div>Cart</div>
      </Link>
    </div>
  );
};

export default Nav;
