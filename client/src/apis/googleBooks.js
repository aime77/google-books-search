import axios from "axios";
const KEY = "AIzaSyBBwjCHsmzGrm91i0Rnc0DvQKuMZUX7qU0";

// export default axios.create({
//   baseURL: "https://www.googleapis.com/auth/books",
//   params: {
//     part: "snippet",
//     key: KEY
//   }
// });
 
export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};


