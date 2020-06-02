// Dependencies
import React, { Component } from "react";

import ForegroundCard from "../components/Cards/ForegroundCard";
import Col from "../components/Grid/Col";

import { List } from "../Components/List";

import API from "../utils/API";

class SavedPage extends Component {
  state = { books: [], };

  // Initial State
  componentDidMount() {
    this.getSavedBooks();
  };

  // Handler Functions
  getSavedBooks = () => {
    API.saveBook()
      .then((res) =>
        this.setState({
          books: res.data.items,
        })
      )
      .catch((err) => console.log(err));
  };

  BookDeletionHandler = (id) => {
    API.deleteBook(id).then((res) => this.getSavedBooks());
  };

  // Page Composition
  render () {
    return (
      <Container>
        <Col size = "md-12">
          <h1></h1>
          <h2></h2>
        </Col>
      
        <Col size = "md-12">
          
        </Col>
      </Container>
    );
  }




}

  export default SavedPage;