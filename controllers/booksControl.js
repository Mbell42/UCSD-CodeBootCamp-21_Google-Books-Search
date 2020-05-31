const db = require('../models');

// Methods for the controller
module.exports = {
    // CREATE
    create: function (req, res) {
        db.Book.create(req.body)
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(400).json(err));
    },
    // READ
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
    // UPDATE
    update: function (req, res) {
        db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(400).json(err));
    },
    // DELETE
    remove: function (req, res) {
        db.Book.findById({ _id: req.params.id })
          .then((dbModel) => dbModel.remove())
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(400).json(err));
    }
}