// Dependencies
import React, { Component } from "react";

import Container from "../components/Grid/Container"
import Col from "../components/Grid/Col";
import ForegroundCard from "../components/Cards/ForegroundCard";

import API from "../utils/API";
import { List } from "../components/List";


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

  BookDeleteHandler = (id) => {
    API.deleteBook(id).then((res) => this.getSavedBooks());
  };

  // Page Composition
  render () {
    return (
      <Container>
        <Col size = "md-12">
          <h1 className="text-center">Google Book Search</h1>
          <hr />
          <h2 className="text-center">Saved Books Gallery</h2>
        </Col>
      
        <Col size = "md-12">
          <ForegroundCard title = "Saved Books" icon = "download">
            {this.state.books.length ? (
              <List>
                {this.state.books.map((item) => (
                  <Col size = "md-12" 
                    key = ""
                    title = ""
                    subtitle = ""
                    authors =""
                    description = ""
                    link = ""
                    image = ""
                    Button = {() => (
                      <button onClick = {() => this.BookDeleteHandler(item.id)}
                      className = "btn btn-danger"
                      >Delete</button>
                    )}
                  />
                ))}
              </List>
            ) : (
              <h2 className = "text-center">No Books have been saved!</h2>
            )}
          </ForegroundCard>
        </Col>
      </Container>
    );
  }
}

  export default SavedPage;