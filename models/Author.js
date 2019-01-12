const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  authors: String
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
