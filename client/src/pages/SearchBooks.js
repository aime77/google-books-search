import React, { Component } from "react";
import Header from "../components/Header";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import googleBooks from "../utils/googleBooks";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
const KEY = "AIzaSyA0dseKEfwC1OM1MdBqClFlWfSTRAgLTVk";

class SearchBooks extends Component {
  state = { books: [], selectedBook: null, saved:false };

  onTermSubmit = async term => {
    const query = `${term} intitle`.replace(/\s/g, "+");
    const response = await googleBooks.get("/volumes", {
      params: {
        q: query,
        key: KEY
      }
    });

    console.log(response);
    this.setState({ books: response.data.items });
  };

  onBookSelect = book => {
    this.setState({ selectedBook: book });
  };

  onSaveButtom = async event => {
    event.preventDefault();

    const savedBook = await API.saveBook({
      title: this.state.title,
      author: this.state.author,
      sypnosis: this.state.sypnosis
    });

    if (savedBook) {
     this.setSate({saved:true})
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <Header />
          </Jumbotron>
          <Row>
            <Col size="md-12">
              <SearchBar onFormSubmit={this.onTermSubmit} />
            </Col>
          </Row>

          <BookList onBookSelect={this.onBookSelect} books={this.state.books} onSaveButton={this.onSaveButton} onDeleteBtn={this.onDeleteBtn}>

          </BookList>
        </Container>
      </div>
    );
  }
}

export default SearchBooks;
