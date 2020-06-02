// Dependencies
import React, { Component } from "react";

import Container from "../components/Grid/Container";
import Col from "../components/Grid/Col";
import Row from "../components/Grid/Row";
import ForegroundCard from "../components/Cards/ForegroundCard";

import API from "../utils/API";

class SearchPage extends Component {
    state = { books: [], search: '' };
    
    // Initial State
    componentDidMount() {
        const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
        this.searchBooksHandler(
            API_URL + "lord+of+the+rings"
          );
    };
    // Reload the version of the page cached by the browser
    refreshPage() {
        window.location.reload();
    };


    // Handler functions
    InputChangeHandler = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
        console.log("New Input: ", this.state.search);
      };

    getBooksHandler = () => {
        API.getBooks(this.state.search)
          .then((res) =>
            this.setState({
              books: res.data,
            })
          )
          .catch(() =>
            this.setState({
              books: [],
              message: "Book Not found",
            })
          );
    };

    searchBooksHandler = (query) => {
        API.search(query)
          .then((res) => {
            console.log(res);
            this.setState({
                books: res.data.items.map((e, i) => ({
                    title: e.volumeInfo.title,
                    authors: e.volumeInfo.authors,
                    description: e.volumeInfo.description,
                    image: e.volumeInfo.imageLinks.thumbnail,
                    link: e.volumeInfo.previewLink,
                    key: e.id,
              })),
            });
          })
          .catch((err) => console.log(err));
    };
    
    saveBookHandler = (id) => {
        const book = this.state.books.find((book) => book.id === id);
        API.saveBook({
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.thumbnail,
          link: book.volumeInfo.infoLink,
          key: book.id,
        }).then(() => this.getBooks());
    };

    formSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Button Clicked: ", this.state.search, e);
        this.searchBooksHandler(this.state.search);
    };


    // Page Composition
    render() {
        return (
          <Container>
                <Row>
                    <Col size = "md-6">
                        <h2>Book Search</h2>
                    </Col>
                </Row>

                <Row>
                    <Col size = "md-12">
                    {this.state.books.map((item) => (
                        <ForegroundCard
                            title={item.title}
                            authors={item.authors}
                            description={item.description}
                            image={item.image}
                            link={item.link}
                            key={item.key}
                            button={() => (
                                <button
                                    onClick={() => this.saveBookHandler(item.id)}
                                    className="btn btn-dark"
                                >
                                    Save
                                </button> 
                            )}
                        />
                    ))}
                    </Col>
                </Row>
          </Container>
        );
    };
};

export default SearchPage;