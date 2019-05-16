import React, { Component } from "react";

import "./App.css";

import Books from "./components/books/books";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Books />
      </div>
    );
  }
}

export default App;
