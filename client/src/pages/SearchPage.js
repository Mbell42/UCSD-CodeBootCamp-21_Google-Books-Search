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

    refreshPage() {
        // Reload the version of the page cached by the browser
        window.location.reload();
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
                        <ForegroundCard>

                        </ForegroundCard>
                    </Col>
                </Row>
          </Container>
        );
    };
};

export default SearchPage;