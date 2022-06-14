import axios from "axios";

let apiUrl;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiUrl = "http://localhost:3000/api";
} else {
  apiUrl = "https://NWN-news.herokuapp.com/api/articles";
}

const NewsAPI = axios.create({ baseURL: apiUrl });

export default NewsAPI;
