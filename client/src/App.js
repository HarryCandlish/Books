import React, { Component } from "react";

import "./App.css";

import Customers from "./components/customers/Customers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Customers />
      </div>
    );
  }
}

export default App;
