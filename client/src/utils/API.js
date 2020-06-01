// Dependencies 
import axios from "axios";

const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    // API FUNCTIONS
    // Search query
    search: function (search) {
        return axios.get(API_URL + search);
    },
    // Read all
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Read
    getBook: function(id) {
        return axios.get('api/books/' + id);
    },
    // Save
    saveBook: function (bookInfo) {
        return axios.post("/api/books", bookInfo);
    },
    // Delete
    deleteBook: function (id) {
        return axios.delete('/api/books' + id);
    }
};