import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Cart from "./Pages/Cart";
import Homepage from "./Pages/Homepage";
import Nav from "./Components/Nav";
import Post from "./Pages/Post";
import Profile from "./Pages/Profile";
import { BiMenuAltRight } from "react-icons/bi";

function App() {
  //URL variable
  const url = "http://localhost:4000/";

  // STATE FOR THE MOBILE NAV ANIMATION
  const [showNav, setShowNav] = useState(false);

  const handlePost = (postInfo) => {
    axios.get(url + "donors/item/create/", {
      headers: { "auth-token": sessionStorage.getItem("token") },
      params: {
        img: postInfo.img[0],
        name: postInfo.name[0],
        description: postInfo.description[0],
      },
    });
  };

  // const handleLogin = (loginInfo) => {
  //   axios
  //     .post(url + "donors/login", {
  //       email: loginInfo.email[0],
  //       password: loginInfo.password[0],
  //     })
  //     .then((data) => {
  //       sessionStorage.setItem("token", data.data.data.token);
  //     })
  //     .then(() => {
  //       console.log(sessionStorage.getItem("token"));
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // };

  return (
    <div className="App">
      <Nav show={showNav} />
      <Switch>
        <Route exact path="/" render={(rp) => <Homepage {...rp} />} />
        <Route
          exact
          path="/post"
          render={(rp) => <Post {...rp} handlePost={handlePost} />}
        />
        <Route
          exact
          path="/profile"
          render={(rp) => <Profile {...rp} url={url} />}
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
