import React, { Component } from "react";

import "./App.css";

import Animals from "./components/animals/Animals";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Animals />
      </div>
    );
  }
}

export default App;
