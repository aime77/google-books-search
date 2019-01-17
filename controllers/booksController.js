//const Book = require("../models/Book");
const db=require("../models")
const Author = require("../models/Author");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: async function(req, res) {
    console.log("test", req.body);
    const bookCreate = await db.Book.create({title:req.body.title, description:req.body.description, authors:req.body.authors, imageURL:req.body.imageURL});
    console.log(bookCreate);
  },
  update: function(req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
