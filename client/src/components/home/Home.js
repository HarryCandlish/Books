import React, { Component } from "react";

import homeStyles from "./home.module.scss";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      contents: []
    };
  }

  componentDidMount() {
    fetch("/api/contents")
      .then(res => res.json())
      .then(contents =>
        this.setState({ contents }, () => console.log("contents", contents))
      );
  }
  render() {
    return (
      <div>
        <div className={homeStyles.container}>
          <img className={homeStyles.image} src="coffee.jpg" />
          <ul className={homeStyles.contents}>
            {this.state.contents.map(content => (
              <li className={homeStyles.content} key={content.id}>
                <h2>{content.title}</h2>
                {content.details}
                {content.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
