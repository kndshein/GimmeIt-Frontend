import React from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";
import '../css/Profile.css'

import LoginForm from "../Components/LoginForm";
import LoggedInProfile from "../Components/LoggedInProfile";

const Profile = (props) => {
  console.log("profile props -", props);

  const handleLogin = (loginInfo) => {
    axios
      .post(props.url + "donors/login", {
        email: loginInfo.email[0],
        password: loginInfo.password[0],
      })
      .then((data) => {
        sessionStorage.setItem("token", data.data.data.token);
      })
      .then(() => {
        console.log(sessionStorage.getItem("token"));
      })
      .then(() => {
        props.history.push("/profile");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    props.history.push("/profile");
  };

  const loggedIn = () => {
    return (
      <div>
        <div>poop</div>
        <LoggedInProfile handleLogout={handleLogout} url={props.url} />
      </div>
    );
  };

  const notLoggedIn = () => {
    return (
      <div className="login-page">
        <h1 className="profile-title">Profile</h1>
        <LoginForm props={props} handleLogin={handleLogin} />
      </div>
    );
  };

  return sessionStorage.getItem("token") ? loggedIn() : notLoggedIn();
};

export default Profile;
