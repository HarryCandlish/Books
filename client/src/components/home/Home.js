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
          <h1 className={homeStyles.title}>HAIRY READS</h1>
          <p className={homeStyles.epigraph}>
            "Because not everyone needs to know what you're reading"
          </p>
          <p className={homeStyles.author}>- Anonymous</p>
        </div>
        <ul className={homeStyles.contents}>
          {this.state.contents.map(content => (
            <li className={homeStyles.content} key={content.id}>
              <h2>{content.title}</h2>
              <p>{content.details}</p>
              <br />
              <p>{content.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
