import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import LoginForm from "../Components/LoginForm";

const Profile = (props) => {
  return (
    <div>
      Profile
      <LoginForm handleLogin={props.handleLogin} />
    </div>
  );
};

export default Profile;
