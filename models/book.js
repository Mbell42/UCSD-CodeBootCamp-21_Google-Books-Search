const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema();

// I will dd schema paramters here

const Book = mongoose.model("Book", bookSchema);

module.export = Book;

