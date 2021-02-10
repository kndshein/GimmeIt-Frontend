import { useState } from 'react'
import { Link } from "react-router-dom";
import CartButton from './CartButton'
import { BiMenuAltRight } from "react-icons/bi";


const Nav = ({ showNav, setShowNav }) => {


  return (
    <>
      <div className="mobile-btn">
        <BiMenuAltRight
          className="mobile-menu-btn"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className={showNav ? "nav-container active" : "nav-container"}>
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
    </>
  );
};

export default Nav;
