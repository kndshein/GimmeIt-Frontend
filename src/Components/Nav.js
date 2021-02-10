import { useState } from 'react'
import { Link } from "react-router-dom";
import CartButton from './CartButton'


const Nav = () => {


  return (
    <>
      <div className="desktop-nav">
        <ul className="desk-nav-items">
          <li className="home">
            <Link to="/">Home</Link>
          </li>
          <li className="post">
            <Link to="/post">Post</Link>
          </li>
          <li className="profile">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="cart">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
