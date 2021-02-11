import React from 'react'
import '../css/Team.css'

function Team() {
   return (
     <>
         <h1 className="theTeam">The Team</h1>
       <div className="kaung-container">
         <img
           src="https://media-exp1.licdn.com/dms/image/C5603AQHknIJvCodDZQ/profile-displayphoto-shrink_800_800/0/1551910400554?e=1618444800&v=beta&t=Fg0SrO8HEsnzelGXR1_LSZx7uN6sl-a7ax9QHC4q8Tk"
           alt=""
           className="img1"
         />
         <p className="about-kaung">
           <span className="kaung-name">Kaung Shein</span>
           <br />
           <br />
           Simply chasing his American Dream.
         </p>
       </div>
       <div className="clay-container">
         <img
           src="https://media-exp1.licdn.com/dms/image/C5603AQEdDE-3lsvejA/profile-displayphoto-shrink_800_800/0/1519092414968?e=1618444800&v=beta&t=e-8-405I1JqIr34Tm5nX9jgHkUiLGukL9zIzK6lHoQs"
           alt=""
           className="img2"
         />
         <p className="about-clay">
           <span className="clay-name">Clayton Miller</span>
           <br />
           <br /> Meet Clayton. He lives in Illinois.
         </p>
       </div>
       <div className="kel-container">
         <img src="https://i.imgur.com/UWmDpTT.jpg" alt="" className="img3" />

         <p className="about-kel">
           <span className="kel-name">Kel Strother</span>
           <br />
           <br />
           Kel lives in Denver, CO. He spends his time either poking keyboards
           or seeing live music.
         </p>
       </div>
     </>
   );
}

export default Team
