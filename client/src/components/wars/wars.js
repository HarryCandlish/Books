import React, { Component } from "react";
import "./wars.css";

class Wars extends Component {
  constructor() {
    super();
    this.state = {
      wars: []
    };
  }

  componentDidMount() {
    fetch("/api/wars")
      .then(res => res.json())
      .then(wars => this.setState({ wars }, () => console.log("wars", wars)));
  }
  render() {
    return (
      <div className="App">
        <h2>Red Cross</h2>
        <ul className="flex">
          {this.state.wars.map(war => (
            <li className="post" key={war.id}>
              <h2>{war.title}</h2>
              {war.details}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Wars;
