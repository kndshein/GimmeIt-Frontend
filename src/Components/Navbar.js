import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import { BiMenuAltRight } from "react-icons/bi";
import { Sling as Hamburger } from "hamburger-react";
import '../css/Nav.css'

function Navbar() {

     const [showNav, setShowNav] = useState(false);
     const sideNav = () => setShowNav(!showNav)

   return (
     <>
       <div className="mobile-btn">
         <BiMenuAltRight
           className="mobile-menu-btn"
           onClick={() => setShowNav(!showNav)}
         />
       </div>
       <nav className={showNav ? "nav-container active" : "nav-container"}>
         <ul className="nav-items" onClick={sideNav}>
           <li className="home">
             <Link to="/">Home</Link>
           </li>
           <li className="post">
             <Link to="/post">Post</Link>
           </li>
           <li className="profile" onClick={sideNav}>
             <Link to="/profile">Profile</Link>
           </li>
           <li className="cart">
             <Link to="/cart">Cart</Link>
           </li>
           <li className="team">
             <Link to="/team">Team</Link>
           </li>
         </ul>
       </nav>
     </>
   );
};

export default Navbar
