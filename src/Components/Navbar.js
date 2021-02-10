import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import { BiMenuAltRight } from "react-icons/bi";
import '../Nav.css'

function Navbar() {

     const [showNav, setShowNav] = useState(false);
     const sideNav = () => setShowNav(!showNav)
   return (
     <>
       <div className="mobile-btn">
         <BiMenuAltRight className="mobile-menu-btn" onClick={sideNav} />
       </div>
       <nav className={showNav ? "nav-container active" : "nav-container"}>
         <ul className="nav-items">
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
       </nav>
     </>
   );
};

export default Navbar
