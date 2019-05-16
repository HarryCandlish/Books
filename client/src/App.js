import React, { Component } from "react";

import "./App.css";

import Books from "./components/books/books";
import Nav from "./components/nav/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header" />
        <Books />
      </div>
    );
  }
}

export default App;
