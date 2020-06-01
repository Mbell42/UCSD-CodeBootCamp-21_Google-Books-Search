//Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './pages/Container';
import NavBar from './pages/NavBar';

import SearchPage from './pages/SearchPage';
import SavePage from './pages/SavePage';
import "./App.css";

// App Page Composition
class App extends Component {
  render() {
    return(
      <Container>
        <Router>
          <Col size = "md-12">
            <NavBar />
            <Switch>
              <Route exact path = "/" component= {SearchPage} />
              <Route exact path = "/saved" component= {SavePage} />
            </Switch>
          </Col>
        </Router>
      </Container>
    );
  }
}

export default App;
