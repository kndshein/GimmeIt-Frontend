import React from "react";

const Confirmation = (props) => {
  return (
    <div>
      Confirmation
      <div>{props.paymentFormData.firstName}</div>
    </div>
  );
};

export default Confirmation;
