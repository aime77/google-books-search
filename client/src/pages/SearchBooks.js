import React, { Component } from "react";
import Header from "../components/Header";
import SearchForms from "../components/SearchForms";
import googleBooks from "../apis/googleBooks";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

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
        <Container>
          <Jumbotron>
        <Header />
        
        </Jumbotron>
            <Row>
              <Col size="md-12">
                <SearchForms />
              </Col>
            </Row>
         
        </Container>
      </div>
    );
  }
}

export default SearchBooks;
