import React from "react";
import axios from "axios";
import { Route, Switch, Link , Router } from "react-router-dom";
import '../css/Profile.css'

import LoginForm from "../Components/LoginForm";
import LoggedInProfile from "../Components/LoggedInProfile";
import RegisterForm from "../Components/RegisterForm"

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

  const handleRegister = (registerInfo) => {
    axios
      .post(props.url + "donors/register",{
        username: registerInfo.username[0],
        firstName: registerInfo.firstName[0],
        lastName: registerInfo.lastName[0],
        password: registerInfo.password[0],
        email: registerInfo.email[0]
      })
  }

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
        <h2 className="profile-title">Login to your account</h2>
        <LoginForm props={props} handleLogin={handleLogin} />
        <RegisterForm handleRegister={handleRegister}/>
        {/* <Link to="/profile/register">
          <button>register</button>
        </Link>
        <Switch>
          <Route
            exact path="/profile/register"
            render={(rp) => (
                <Register
                  {...rp}
                />
            )}/>
        </Switch> */}
      </div>
    );
  };

  return sessionStorage.getItem("token") ? loggedIn() : notLoggedIn();
};

export default Profile;
