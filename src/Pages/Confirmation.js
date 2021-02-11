import axios from "axios";
import React from "react";
import "../css/Payment.css";

const Confirmation = (props) => {
  const handlePaymentConfirm = (event) => {
    // add PUT route to add shipping address in the API
    console.log(props.paymentFormData)
    for (let index = 0; index < props.cartItems.length; index++) {
      axios.put(props.url + "items/id/" + props.cartItems[index]._id,{
        shipping: {
          firstName: props.paymentFormData.firstName[0],
          lastName: props.paymentFormData.lastName[0],
          addressStreet: props.paymentFormData.addressStreet[0],
          addressCity: props.paymentFormData.addressCity[0],
          addressState: props.paymentFormData.addressState[0],
          addressZipcode: props.paymentFormData.addressZipcode[0]
        }
      })
      props.setCartItems(props.cartItems.filter(item => item._id !== props.cartItems[index]._id))
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
