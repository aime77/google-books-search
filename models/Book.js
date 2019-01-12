const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
   article: [
    {
      type: Schema.Types.ObjectId,
      ref: "Authors",
    }
  ],
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
    link: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  title: {
    type: String,
    trim: true,
  },
  rating:{
    type:Number,
    trim: true
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;


