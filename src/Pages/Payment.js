import React from "react";
import PaymentForm from "../Components/PaymentForm";
import '../css/Payment.css'

const Payment = (props) => {
  return (
    <div>
      <h1 className="payment-info">Payment Info</h1>
      <PaymentForm
        props={props}
        paymentFormData={props.paymentFormData}
        setPaymentFormData={props.setPaymentFormData}
      />
    </div>
  );
};

export default Payment;
