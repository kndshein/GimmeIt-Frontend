import React from "react";
import "../css/Item.css";

const ListedItems = (props) => {
  const [toggleState, setToggleState] = React.useState(null);

  

  const loaded = () => {
    const handleAddCart = (item) => {
        props.setCartItems([...props.cartItems, item])
        console.log("cart items - ",props.cartItems)
        //make item selected unavailable
    }

    const handleClick = (index) => {
      setToggleState({ active: index });
      if (toggleState?.active === index) {
        setToggleState({ active: null });
      }
    };

    return (
      <div>
        {props.listedItems.data.map((item, index) => {
          console.log(item);
          return (
            <div
              className={`image-container${
                toggleState?.active === index ? " active" : ""
              }`}
              onClick={() => handleClick(index)}
              key={index}
            >
              <img className="image" src={item.img} alt="desk" />
              <div className="image-text">
                <h2 className="item-cardname">{item.name}</h2>
              </div>
              <button onClick={() => handleAddCart(item)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    );
  };

  const loading = () => {
    return <h1>LOADING...</h1>;
  };
  console.log(props.listedItems);

  return props.listedItems ? loaded() : loading();
};

export default ListedItems;
