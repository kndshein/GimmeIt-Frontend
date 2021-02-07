import React from "react";
import { Link } from "react-router-dom";
import NavButton from './NavButton'
import CartButton from './CartButton'

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
      <NavButton />
      <CartButton />
    </div>
  );
};

export default Nav;
