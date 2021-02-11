import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Payment from "./Payment";
import Confirmation from "./Confirmation";

const Cart = (props) => {
  const [paymentFormData, setPaymentFormData] = React.useState(null);

  return (
    <div>
      Cart
      <Link to="/cart/payment">
        <div>Checkout</div>
      </Link>
      <Switch>
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
            <Confirmation {...rp} paymentFormData={paymentFormData} url={props.url} />
          )}
        />
      </Switch>
    </div>
  );
};

export default Cart;
