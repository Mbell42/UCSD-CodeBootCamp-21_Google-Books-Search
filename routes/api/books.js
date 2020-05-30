// Dependencies
const router = require('express').Router();
const booksControl = require("../../controllers/booksControl");

// /api/books
router.route("/")
.get(booksControl.findAll)
.post(booksControl.create);


// /api/books/:id
router.route("/:id")
.get(booksControl.findById)
.put(booksControl.update)
.delete(booksControl.remove);

module.exports = router;