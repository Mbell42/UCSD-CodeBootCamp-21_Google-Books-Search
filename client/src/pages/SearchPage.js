// Dependencies
import React, { Component } from 'react';
import Container from '../Components/Grid/Container';
import Col from '../Components/Grid/Col';
import Row from '../Components/Grid/Row';

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
              <Col size = "md-12">
                  <Row>

                  </Row>
              </Col>
          </Container>
        );
    };
};

export default SearchPage;