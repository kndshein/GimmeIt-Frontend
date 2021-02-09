import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Cart from "./Pages/Cart";
import Confirmation from "./Pages/Confirmation";
import Homepage from "./Pages/Homepage";
import Nav from "./Components/Nav";
import Payment from "./Pages/Payment";
import Post from "./Pages/Post";
import Profile from "./Pages/Profile";
import { BiMenuAltRight } from "react-icons/bi";
import Item from "./Components/Item";

function App() {
  //URL variable
  const url = "http://localhost:4000/";


  // STATE FOR THE MOBILE NAV ANIMATION
  const [showNav, setShowNav] = useState(false);
  // STATE FOR ITEMS


  const handleLogin = (loginInfo) => {
    console.log(loginInfo);
    axios
      .post(url + "donors/login", {
        email: loginInfo.email[0],
        password: loginInfo.password[0],
      })
      .then((data) => {
        sessionStorage.setItem("token", data.data.data.token);
      })
      .then(() => {
        console.log(sessionStorage.getItem("token"));
      });
  };

  return (
    <div className="App">
      <Nav show={showNav} />
      <Switch>
        <Route exact path="/" render={(rp) => <Homepage {...rp} />} />
        <Route path="/post" render={(rp) => <Post {...rp} />} />
        <Route
          exact
          path="/profile"
          render={(rp) => <Profile {...rp} handleLogin={handleLogin} />}
        />
        <Route
          exact
          path="/cart"
          render={(rp) => (
            <Router>
              <Cart {...rp} />
            </Router>
          )}
        />
      </Switch>
      <BiMenuAltRight
        className="mobile-menu-btn"
        onClick={() => setShowNav(!showNav)}
      />
    </div>
  );
}

export default App;
