// dependencies
const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

// API routes
router.use("/api", apiRoutes)


// If no api is hit, send front-end
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;

