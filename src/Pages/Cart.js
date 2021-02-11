import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Payment from "./Payment";
import Confirmation from "./Confirmation";
import axios from "axios";

const Cart = (props) => {
  const [paymentFormData, setPaymentFormData] = React.useState(null);

  const handleRemoveFromCart = (item) => {
    axios.put(props.url + "items/id/" + item._id, {
      available: true,
    });
    const itemId = item._id;
    props.setCartItems(props.cartItems.filter((item) => item._id !== itemId));
    console.log("cart items - ", props.cartItems);
    //make item selected unavailable
  };

  return (
    <div>
      Cart
      <Switch>
        <Route
          exact
          path="/cart"
          render={(rp) => (
            <div>
              {props.cartItems.map((item, index) => {
                console.log("cart items - ", item);
                return (
                  <div className={"image-container"} key={index}>
                    <img className="image" src={item.img} alt="desk" />
                    <div className="image-text">
                      <h2 className="item-cardname">{item.name}</h2>
                    </div>
                    <button onClick={() => handleRemoveFromCart(item)}>
                      Remove
                    </button>
                  </div>
                );
              })}
              <Link to="/cart/payment">
                <div>Checkout</div>
              </Link>
            </div>
          )}
        />
        <Route
          exact
          path="/cart/payment"
          render={(rp) => (
            <Payment
              {...rp}
              paymentFormData={paymentFormData}
              setPaymentFormData={setPaymentFormData}
            />
          )}
        />
        <Route
          exact
          path="/cart/confirmation"
          render={(rp) => (
            <Confirmation
              {...rp}
              paymentFormData={paymentFormData}
              url={props.url}
              cartItems={props.cartItems}
              setCartItems={props.setCartItems}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default Cart;
