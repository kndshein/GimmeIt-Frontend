import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Cart from "./Pages/Cart";
import Homepage from "./Pages/Homepage";
import Nav from "./Pages/Nav";
import Post from "./Pages/Post";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
