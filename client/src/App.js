import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/home/Home";
import Books from "./components/books/Books";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
