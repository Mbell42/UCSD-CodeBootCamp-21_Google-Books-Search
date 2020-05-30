// Dependencies

const express = require("express");
const routes = require("routes");
const mongoose = require("mongoose");


// Setup Express
const app = express();
const PORT = process.env.PORT || 3001;


// Middleware
app.use(
    express.urlencoded({
        extended: true 
    })
);
app.use(
    express.json()
);


// Database connection
mongoose.connect(
    "mongodb://localhost/test", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB Successfully!"))
  .catch(err => console.log(err));


// Routes - front-end / API 
// app.use();

// Start the back-end server

