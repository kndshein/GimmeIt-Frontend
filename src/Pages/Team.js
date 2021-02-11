import React from 'react'
import '../css/Team.css'

function Team() {
   return (
     <>
       <div className="team-container">
         <h1 className="theTeam">The Team</h1>
       </div>
       <div className="member-container">
         <img src="" alt="" className="kaung" />
         <h3>Kaung S.</h3>
         <p className="about-kaung">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
           voluptas impedit quasi laborum architecto deserunt magni ipsum.
           Labore, veritatis libero.
         </p>
         <img src="" alt="" className="clay" />
         <h3>Clayton Miller</h3>
         <p className="about-clay">
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
           sit! Natus iste cumque eaque nostrum debitis fugiat beatae voluptatum
           aperiam!
         </p>
         <img src="https://i.imgur.com/UWmDpTT.jpg" alt="" className="kel" />
         <h3>Kel Strother</h3>
         <p className="about-kel">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
           asperiores dicta esse necessitatibus veniam quidem quisquam
           consectetur. Ad, ducimus similique?
         </p>
       </div>
     </>
   );
}

export default Team
