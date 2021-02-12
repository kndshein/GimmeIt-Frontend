import React from "react";

const PaymentForm = (props) => {
  // empty object for formData state
  const emptyPaymentFormData = {
    firstName: "",
    lastName: "",
    addressStreet: "",
    addressCity: "",
    addressState: "",
    addressZipcode: "",
  };

  // if paymentFormData from Cart.js has information, show that. if not, have the form be empty
  const [formData, setFormData] = React.useState(
    props.paymentFormData ? props.paymentFormData : emptyPaymentFormData
  );

  // controlled state function for form
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: [event.target.value],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.setPaymentFormData(formData); // update passed down state from Cart.js with the form data
    props.props.history.push("/cart/confirmation"); //Push to confirmation page
  };

  return (
    <div className="payment-container">
      <form className="form-payment" onSubmit={handleSubmit}>
        <input
          className="name-payment"
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          className="lastName-payment"
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          className="street-payment"
          type="text"
          name="addressStreet"
          placeholder="Street Address"
          required
          value={formData.addressStreet}
          onChange={handleChange}
        />
        <input
          className="city-payment"
          type="text"
          name="addressCity"
          placeholder="City"
          required
          value={formData.addressCity}
          onChange={handleChange}
        />
        <input
          className="state-payment"
          type="text"
          name="addressState"
          placeholder="State"
          required
          value={formData.addressState}
          onChange={handleChange}
        /> 
        <input
          className="zip-payment"
          type="text"
          name="addressZipcode"
          placeholder="Zipcode"
          pattern="^[0-9]*$"
          required
          value={formData.addressZipcode}
          onChange={handleChange}
        />
        <input className="btn-payment" type="submit" />
      </form>
    </div>
  );
};

export default PaymentForm;
