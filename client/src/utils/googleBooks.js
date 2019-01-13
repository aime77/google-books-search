
import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
  
});


//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyA0dseKEfwC1OM1MdBqClFlWfSTRAgLTVk