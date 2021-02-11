import React from "react";
import '../css/Profile.css'

const RegisterForm = (props) => {
  console.log("registerForm props - ", props);
  // empty object for formData state
  const emptyRegisterFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };

  // if paymentFormData from Cart.js has information, show that. if not, have the form be empty
  const [formData, setFormData] = React.useState(emptyRegisterFormData);

  // controlled state function for form
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: [event.target.value],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleRegister(formData); // update passed down state from App.js with the form data
  };

  return (
    <div className="login-container">
      <form className="form-login" onSubmit={handleSubmit}>
        <input
          className="form-username"
          type="text"
          name="username"
          placeholder="username"
          required
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className="form-firstName"
          type="text"
          name="firstName"
          placeholder="firstName"
          required
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          className="form-lastName"
          type="text"
          name="lastName"
          placeholder="lastName"
          required
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          className="form-password"
          type="text"
          name="password"
          placeholder="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <input
          className="form-email"
          type="text"
          name="email"
          placeholder="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input className="btn-login" type="submit" value='Login'/>
      </form>
    </div>
  );
};

export default RegisterForm;