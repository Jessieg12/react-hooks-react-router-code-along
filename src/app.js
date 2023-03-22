import React from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";
import About from "./about";
import Login from "./login";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path ="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path ="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
