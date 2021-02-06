import React from "react";

const Confirmation = (props) => {
  const handlePaymentConfirm = (event) => {
    // add PUT route to add shipping address in the API
    props.history.replace("/cart");
  };
  return (
    <div>
      Confirmation
      <div className="buyer-container">
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
      <button onClick={handlePaymentConfirm}>Confirm</button>
    </div>
  );
};

export default Confirmation;
