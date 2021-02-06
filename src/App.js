import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Cart from "./Pages/Cart";
import Confirmation from "./Pages/Confirmation";
import Homepage from "./Pages/Homepage";
import Nav from "./Components/Nav";
import Payment from "./Pages/Payment";
import Post from "./Pages/Post";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" render={(rp) => <Homepage {...rp} />} />
        <Route path="/post" render={(rp) => <Post {...rp} />} />
        <Route exact path="/profile" render={(rp) => <Profile {...rp} />} />
        <Route
          exact
          path="/cart"
          render={(rp) => (
            <Router>
              <Cart {...rp} />
            </Router>
          )}
        />
        <Route
          exact
          path="/confirmation"
          render={(rp) => <Confirmation {...rp} />}
        />
      </Switch>
    </div>
  );
}

export default App;
