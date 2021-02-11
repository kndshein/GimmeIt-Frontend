import React from "react";
import "../css/Payment.css";

const Confirmation = (props) => {
  const handlePaymentConfirm = (event) => {
    // add PUT route to add shipping address in the API
    for (let index = 0; index < props.cartItems.length; index++) {
      fetch(props.url + "items/id" + props.cartItems[index]._id,{
        body: {
          shipping: JSON.stringify(props.paymentFormData)
        }
      })
    }
    
    props.history.replace("/cart");
  };
  return (
    <div className="confirm-container">
      <div className="buyer-container">
        <h1 className="confirmation">Please Confirm Information</h1>
        <div className="name">
          {props.paymentFormData.firstName} {props.paymentFormData.lastName}
        </div>
        <div className="street-address">
          {props.paymentFormData.addressStreet}
          <br />
          {props.paymentFormData.addressCity},{" "}
          {props.paymentFormData.addressState}{" "}
          {props.paymentFormData.addressZipcode}
        </div>
      </div>
      <div className="btn-confirmation">
        <button
          className="btn-confirm"
          id="confirmation-btn"
          onClick={handlePaymentConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
