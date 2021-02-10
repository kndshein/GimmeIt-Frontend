import React from "react";
import '../css/Item.css'

const Item = (props) => {
  return (
    <div className={"image-container"}>
      <img
        className="image"
        src= {props.itemData.img}
        alt="desk"
      />
      <div className="image-text" >
        <h2 className="item-cardname">{props.itemData.name}</h2>
      </div>
    </div>
  );
};

export default Item;
