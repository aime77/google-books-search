const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  authors: [
    {
      type: String
    }
  ],
  description: {
    type: String,
    trim: true
  },
  imageURL: {
    type: String
  },
  webReaderLink: {
    type: String
  },
  title: {
    type: String,
    trim: true
  },
  rating: {
    type: Number,
    trim: true
  },
  id:{
    type: String
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
