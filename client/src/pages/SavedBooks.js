import React, { Component } from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "../components/Grid";
import BookList from "../components/BookList";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class SavedBooks extends Component {
  state = { books: [], title: "", author: "", synopsis: "" };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange=event=>{
    const{name, value}=event.target;
    this.setState({
      [name]:value
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <Header />
          </Jumbotron>
          <BookList books={this.state.books} />
        </Container>
      </div>
    );
  }
}

export default SavedBooks;
