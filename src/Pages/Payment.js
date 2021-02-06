import React from "react";
import PaymentForm from "../Components/PaymentForm";

const Payment = (props) => {
  return (
    <div>
      Payment
      <PaymentForm
        props={props}
        paymentFormData={props.paymentFormData}
        setPaymentFormData={props.setPaymentFormData}
      />
    </div>
  );
};

export default Payment;
