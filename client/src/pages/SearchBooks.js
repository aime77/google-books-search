import React, { Component } from "react";
import Header from "../components/Header";
import BookList from "../components/BookList";
import BookItem from "../components/BookItem";
import Buttons from "../components/Buttons";
import SearchBar from "../components/SearchBar";
import SearchContainer from "../components/SearchContainer";
import googleBooks from "../utils/googleBooks";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
const KEY = "AIzaSyA0dseKEfwC1OM1MdBqClFlWfSTRAgLTVk";

class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.text_truncate = this.text_truncate;
  }
  state = { books: [], title: "", author: "", sypnosis: "" };

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

  text_truncate = function(str, length, ending) {
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };

  onBookSelect = book => {
    this.setState({ selectedBook: book });
  };

  onSaveButton = (id, title, description, authors, imageURL, webReaderLink) => {
    API.saveBook({
      id: id,
      title: title,
      authors: authors,
      description: description,
      imageURL: imageURL,
      webReaderLink: webReaderLink
    })
      .then(this.setState())
      .catch(error => console.log(error.message));
  };

  render() {
    return (
      <Container>
        <Jumbotron>
          <Header />
        </Jumbotron>
        <Row>
          <Col size="md-12">
            <SearchBar onFormSubmit={this.onTermSubmit} />
          </Col>
        </Row>
        {this.state.books.length > 0 ? (
          <SearchContainer>
            <h4> Searched Books</h4>
            <BookList>
              {this.state.books.map(book => (
                <BookItem>
                  <Row>
                    <h4 className="header col-10">{book.volumeInfo.title}</h4>
                    <Col size="md-2" className="float-right">
                      <Buttons>
                        <a href={book.accessInfo.webReaderLink} target="_blank">
                          <i class="eye icon" />
                        </a>
                      </Buttons>
                      <Buttons
                        onClick={() =>
                          this.onSaveButton(
                            book.id,
                            book.volumeInfo.title,
                            book.volumeInfo.description,
                            book.volumeInfo.authors,
                            book.volumeInfo.imageLinks.smallThumbnail,
                            book.accessInfo.webReaderLink
                          )
                        }
                      >
                        <i class="save icon" />
                      </Buttons>
                    </Col>
                  </Row>
                  <div class="ui two column stackable grid">
                    <div class="column col-3">
                      <div className="book-item item" key={book.id}>
                        {book.volumeInfo.imageLinks.smallThumbnail ? (
                          <img
                            className="ui image"
                            alt={book.volumeInfo.title}
                            src={book.volumeInfo.imageLinks.smallThumbnail}
                          />
                        ) : (
                          <h5>No image available</h5>
                        )}
                      </div>
                    </div>

                    <div class="column col-9">
                      <div className="content">
                        <div className="body">
                          {book.volumeInfo.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </BookItem>
              ))}
            </BookList>
          </SearchContainer>
        ) : (
          <h5>Start your search!</h5>
        )}
      </Container>
    );
  }
}

export default SearchBooks;
