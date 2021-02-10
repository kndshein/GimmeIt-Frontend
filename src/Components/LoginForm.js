import React from "react";
import '../css/Profile.css'

const LoginForm = (props) => {
  console.log("loginForm props - ", props);
  // empty object for formData state
  const emptyLoginFormData = {
    email: "",
    password: "",
  };

  // if paymentFormData from Cart.js has information, show that. if not, have the form be empty
  const [formData, setFormData] = React.useState(emptyLoginFormData);

  // controlled state function for form
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: [event.target.value],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleLogin(formData); // update passed down state from App.js with the form data
  };

  return (
    <div className="login-container">
      <form className="form-login" onSubmit={handleSubmit}>
        <input
          className="form-email"
          type="text"
          name="email"
          placeholder="email"
          required
          value={formData.email}
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
        <input className="btn-login" type="submit" value='Login'/>
      </form>
    </div>
  );
};

export default LoginForm;
