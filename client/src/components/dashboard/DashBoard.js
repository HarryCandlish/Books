import React, { Component } from "react";
import dashBoardStyles from "./dashboard.module.scss";

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    fetch("/api/books")
      .then(res => res.json())
      .then(books =>
        this.setState({ books }, () => console.log("books", books))
      );
  }
  render() {
    return (
      <div>
        <h2>Your Journal</h2>
        <ul className={dashBoardStyles.flex}>
          {this.state.books.map(book => (
            <li className={dashBoardStyles.post} key={book.id}>
              <h2>{book.title}</h2>
              {book.details}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DashBoard;
