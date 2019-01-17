import React, { Component } from "react";
import Header from "../components/Header";
import BookList from "../components/BookList";
import BookItem from "../components/BookItem";
import Buttons from "../components/Buttons";
import SearchBar from "../components/SearchBar";
import googleBooks from "../utils/googleBooks";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
const KEY = "AIzaSyA0dseKEfwC1OM1MdBqClFlWfSTRAgLTVk";

class SearchBooks extends Component {
  state = { books: [], title: "", author: "", sypnosis: "", saved: false };

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

  onSaveButton = (id, title, description, authors, imageURL) => {
    API.saveBook({
      title: title,
      authors: authors,
      description: description,
      imageURL: imageURL
    })
      .then(this.setState({ saved: true }))
      .catch(error => console.log(error.message));
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

          <BookList>
            {this.state.books.map(book => (
              <BookItem>
                <div className="book-item item" key={book.id}>
                  <div className="header">{book.volumeInfo.title}</div>
                  <div className="col-12">
                    <img
                      className="ui image"
                      alt={book.volumeInfo.title}
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                    />
                    <div className="content">
                      <div className="body">{book.volumeInfo.description}</div>
                    </div>
                    <Buttons> <i class="eye icon" /></Buttons>
                    <Buttons
                      onClick={() =>
                        this.onSaveButton(
                          book.id,
                          book.volumeInfo.title,
                          book.volumeInfo.description,
                          book.volumeInfo.authors,
                          book.volumeInfo.imageLinks.smallThumbnail
                        )
                      }
                    >
                      <i class="save icon"></i>
                    </Buttons>
                  </div>
                </div>
              </BookItem>
            ))}
          </BookList>
        </Container>
      </div>
    );
  }
}

export default SearchBooks;
