import React, { Component } from "react";
import Header from "../components/Header";
import DeleteBtn from "../components/DeleteBtn";
import Buttons from "../components/Buttons";
import { Container, Row, Col } from "../components/Grid";
import BookList from "../components/BookList";
import BookItem from "../components/BookItem";
import SearchContainer from "../components/SearchContainer";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import "../components/style.css";

class SavedBooks extends Component {
  state = { books: [], title: "", authors: "", description: "" };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks().then(res => {
      this.setState({ books: res.data });
    });
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Jumbotron>
          <Header />
        </Jumbotron>
        <BookList books={this.state.books} />
        {this.state.books.length > 0 ? (
          <SearchContainer>
            <h4> Saved Books</h4>
            <BookList>
              {this.state.books.map(book => (
                <BookItem>
                  <Row>
                    <h4 className="header col-10">{book.title}</h4>
                    <Col size="md-2" className="float-right">
                      <DeleteBtn onClick={() => this.deleteBook(book._id)}>
                        <i class="trash alternate icon large" />
                      </DeleteBtn>
                      {book.webReaderLink ? (
                        <Buttons>
                          <a href={book.webReaderLink} target="_blank">
                            <i class="eye icon" />
                          </a>
                        </Buttons>
                      ) : (
                        <h5>No web link</h5>
                      )}
                    </Col>
                  </Row>

                  <div className="ui two column stackable grid">
                    <div className="column col-3">
                      <div className="book-item item" key={book.id}>
                        {book.imageURL ? (
                          <img
                            className="ui image"
                            alt={book.title}
                            src={book.imageURL}
                          />
                        ) : (
                          <h5>No image available</h5>
                        )}
                      </div>
                    </div>

                    <div className="column col-9">
                      <div className="content">
                        <div className="body">{book.description}</div>
                      </div>
                    </div>
                  </div>
                </BookItem>
              ))}
            </BookList>
          </SearchContainer>
        ) : (
          <h5>No saved books!</h5>
        )}
      </Container>
    );
  }
}

export default SavedBooks;
