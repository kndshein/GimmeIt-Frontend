import React from "react";

const Item = () => {
  return (
    <div className="image-container">
      <div className="item-image">
        <img
          className='image'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSQr1vJClS-FmGfsYnIQ8V9ejotHpLrVdd8Q&usqp=CAU"
          alt="desk"
        />
          <h2 className="item-cardname">Office Desk</h2>
      </div>
    </div>
  );
};

export default Item;
