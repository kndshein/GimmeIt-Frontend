import React from 'react'
import '../css/Homepage.css'
import Logo from './background.png'

function LogoHeader() {
   return (
     <div className="home-container">
       <div className="logo-container">
         {/* <img className='gimme' src={Logo} alt=""/> */}
         <h1 className="title-text">
           Gimme<span className="dot">.</span>it
         </h1>
       </div>
     </div>
   );
}

export default LogoHeader
