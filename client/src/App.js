import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./components/home/Home";
import DashBoard from "./components/dashboard/Dashboard";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
