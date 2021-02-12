import React from "react";
import "../css/Team.css";

function Team() {
  return (
    <>
      <h1 className="theTeam">The (Dream) Team</h1>
      <div className="kaung-container">
        <div className="team-image">
          <img
            src="https://cdn.discordapp.com/attachments/806696089243615275/809503418846281738/IMG_0511-Edit.jpeg"
            alt="Kaung Shein"
          />
        </div>
        <p className="about-kaung">
          <span className="kaung-name">Kaung Shein</span>
          <br />
          <br />
          Simply chasing his American Dream.
        </p>
      </div>
      <div className="clay-container">
        <div className="team-image">
          <img
            src="https://media.discordapp.net/attachments/286649548997132289/809489368603295815/36570780_1896191790444830_5075000122220216320_n.jpg?width=343&height=343"
            alt="Clayton Miller"
          />
        </div>
        <p className="about-clay">
          <span className="clay-name">Clayton Miller</span>
          <br />
          <br /> Meet Clayton. He lives in Illinois.
        </p>
      </div>
      <div className="kel-container">
        <div className="team-image kel-image">
          <img src="https://i.imgur.com/UWmDpTT.jpg" alt="Kel Strother" />
        </div>
        <p className="about-kel">
          <span className="kel-name">Kel Strother</span>
          <br />
          <br />
          Kel lives in Denver, CO. He spends his time either poking keyboards or
          seeing live music.
        </p>
      </div>
    </>
  );
}

export default Team;
