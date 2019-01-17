import React, { Component } from "react";
import Header from "../components/Header";
import DeleteBtn from "../components/DeleteBtn";
import Buttons from "../components/Buttons";
import { Container, Row, Col } from "../components/Grid";
import BookList from "../components/BookList";
import BookItem from "../components/BookItem";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class SavedBooks extends Component {
  state = { books: [], title: "", authors: "", description: "" };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    console.log("hello");
    API.getBooks().then(res => {
      console.log(res);
      this.setState({ books: res.data });

      console.log(this.state.books);
    });
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <Header />
          </Jumbotron>
          <BookList books={this.state.books} />
        

        <BookList>
          {this.state.books.map(book => (
            <BookItem>
              <div className="book-item item">
                <div className="header">{book.title}</div>
                <div className="col-12">
                  <img
                    className="ui image"
                    alt={book.title}
                    src={book.imageURL}
                  />
                  <div className="content">
                    <div className="body">{book.description}</div>
                  </div>
                  <DeleteBtn onClick={() => this.deleteBook(book._id)}>
                    <i class="trash alternate icon" />
                  </DeleteBtn>
                  <Buttons onSaveButton={this.onSaveButton}>
                    <i class="eye icon" />
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

export default SavedBooks;
