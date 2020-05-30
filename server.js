// // Dependencies

// const express = require("express");
// const routes = require("routes");
// const mongoose = require("mongoose");


// // Setup Express
// const app = express();
// const PORT = process.env.PORT || 3001;


// // Database connection / configuration
// const db = "" ;
// mongoose.connect(
//     db, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true
//   })
//   .then(() => console.log("Connected to MongoDB Successfully!"))
//   .catch(err => console.log(err));


// // Middleware
// app.use(
//     express.urlencoded({
//         extended: true 
//     })
// );
// app.use(
//     express.json()
// );


// // Routes - front-end / API 
// app.use(routes);

// // Start the back-end server
// app.listen(PORT, () => {
//     console.log(`Server is now listening on PORT ${PORT}!`);
// });

