import axios from "axios";
const KEY = "AIzaSyBBwjCHsmzGrm91i0Rnc0DvQKuMZUX7qU0";

export default axios.create({
  baseURL: "https://www.googleapis.com/auth/books",
  params: {
    part: "snippet",
    key: KEY
  }
});
