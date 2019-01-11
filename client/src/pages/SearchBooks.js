import React, { Component } from "react";
import Header from "../components/Header";
import googleBooks from "../apis/googleBooks";

class SearchBooks extends Component {
  state = { books: [], selectedBook: null };

  onTermSubmit = async term => {
    const response = await googleBooks.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ books: response.data.items });
  };

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default SearchBooks;
