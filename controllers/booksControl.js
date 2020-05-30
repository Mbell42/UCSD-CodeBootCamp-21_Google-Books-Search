const db = require('../models');

// Methods for the controller
module.exports = {
    findAll: (req,res) => {
        db.Book.find(req.query)
            .sort({ date: -1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(400).json(err));
    },
    findById: (req, res) => {
        db.Book.findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(400).json(err));
    },

}