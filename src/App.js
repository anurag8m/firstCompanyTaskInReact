import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HomePage from "./components/home.component.js";
import TestPage from "./components/test.component.js";
import NewPage from "./components/new.component.js";
import Profile from "./components/showsong1.component.js";
import Gallery from "./components/showsong.component.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/test" component={TestPage} />
        <Route path="/new" component={NewPage} />
      </Router>
    );
  }
}

export default App;
