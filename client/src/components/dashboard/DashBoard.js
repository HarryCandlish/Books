import React, { Component } from "react";
import dashBoardStyles from "./dashboard.module.scss";

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      dashboard: []
    };
  }

  componentDidMount() {
    fetch("/api/books")
      .then(res => res.json())
      .then(books =>
        this.setState({ books }, () => console.log("books", books))
      );
    fetch("/api/dashboard")
      .then(res => res.json())
      .then(dashboard =>
        this.setState({ dashboard }, () => console.log("dashboard", dashboard))
      );
  }

  render() {
    return (
      <div>
        <h2>Log</h2>
        <ul className={dashBoardStyles.dash}>
          {this.state.dashboard.map(dash => (
            <li className={dashBoardStyles.dashContent} key={dash.id}>
              <h2>{dash.title}</h2>
              {dash.details}
            </li>
          ))}
        </ul>
        <h2>Recently Added Books</h2>
        <ul className={dashBoardStyles.bookFlex}>
          {this.state.books.map(book => (
            <li className={dashBoardStyles.books} key={book.id}>
              <h2>{book.title}</h2>

              <p>{book.details}</p>
              <img className={dashBoardStyles.images} src={book.image} />
              <br />
              <p>{book.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DashBoard;
