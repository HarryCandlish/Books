import React, { Component } from "react";
import "./books.module.scss";

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
      <div className="App">
        <h2>Book Journal</h2>
        <ul className="flex">
          {this.state.books.map(book => (
            <li className="post" key={book.id}>
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
