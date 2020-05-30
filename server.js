// Dependencies
const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");


// Setup Express
const app = express();
const PORT = process.env.PORT || 3000;


// Database connection / configuration
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB Successfully!"))
  .catch(err => console.log(err));


// Middleware
app.use(
    express.urlencoded({
        extended: true 
    })
);
app.use(
    express.json()
);


// Routes - front-end / API 
app.use(routes);

// Start the back-end server
app.listen(PORT, () => {
    console.log(`Server is now listening on PORT ${PORT}!`);
});

