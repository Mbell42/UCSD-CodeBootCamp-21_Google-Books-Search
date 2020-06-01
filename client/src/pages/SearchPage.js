// Dependencies
import React, { Component } from 'react';
import Container from '../Components/Grid/Container';
import Col from '../Components/Grid/Col';
import Row from '../Components/Grid/Row';
import ForegroundCard from '../components/Cards/ForegroundCard';

class SearchPage extends Component {
    state = { books: [], search: '' };
    
    // Initial State
    componentDidMount() {
        // API needed
    };
    // Reload the version of the page cached by the browser
    refreshPage() {
        window.location.reload();
    };


    // Handler functions
    // handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Button Clicked', this.state.search, e);
    //     this.searchBooks(this.state.search);
    //   };


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
                                    onClick={() => this.handleBookSave(item.id)}
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