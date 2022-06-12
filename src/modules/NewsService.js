import axios from "axios";
import store from "../state/store/configureStore";

const { dispatch } = store;
const NewsService = {
  async index() {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    dispatch({ type: "SET_NEWS_FEED", payload: response.data.articles });
  },

  async search(query) {},
};

export default NewsService;
