const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema parameters here
const bookSchema = new Schema({
    title: { type: String },
    authors: { type: Array },
    decription: { type: String },
    image: { type: String },
    link: { type: String },
    date: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", bookSchema);

module.export = Book;

