//Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Container from "./components/Grid/Container";
import Col from "./components/Grid/Col"
import NavBar from "./components/Navbar";

import SearchPage from "./pages/SearchPage.js";
import SavedPage from "./pages/SavedPage.js";
import "./App.css";

// App Page Composition
class App extends Component {
  render() {
    return(
      <Container>
        <Router>
          <Col size = "md-12">
            {/* Navbar will appear at top of each page */}
            <NavBar />
            <Switch>
              <Route exact path = "/" component= {SearchPage} />
              <Route path = "/search" component= {SearchPage} />
              <Route path = "/saved" component= {SavedPage} />
            </Switch>
          </Col>
        </Router>
      </Container>
    );
  }
}

export default App;
