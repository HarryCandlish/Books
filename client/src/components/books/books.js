import React, { Component } from "react";
import bookStyles from "./books.module.scss";

class Books extends Component {
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
        <ul className={bookStyles.flex}>
          {this.state.books.map(book => (
            <li className={bookStyles.post} key={book.id}>
              <h2>{book.title}</h2>
              {book.details}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Books;
