// Dependencies
import React, { Component } from 'react';
import Container from '../Components/Container';
import Col from '../Components/Col';

class SearchPage extends Component {
    state = { books: [], search: '' };
    
    // Initial State
    componentDidMount() {
        // API needed
    };

    refreshPage() {
        // Reload the version of the page cached by the browser
        window.location.reload();
    };

    // Page Composition
    render() {
        return (
          <Container>
              <Col>
              </Col>
          </Container>
        );
    };
};

export default SearchPage;