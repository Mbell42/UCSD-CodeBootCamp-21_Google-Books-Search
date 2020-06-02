import React, { Component } from "react";
import BookCard from "../Components/BookCard";
import Wrapper from "../Components/Wrapper";
import Col from "../Components/Col";
import API from "../utils/API";
import { List } from "../Components/List";

class SavedPage extends Component {
  state = {
    books: [],
  };

  // Initial State
  componentDidMount() {
    this.getSavedBooks();
  };


}

  export default SavedPage;