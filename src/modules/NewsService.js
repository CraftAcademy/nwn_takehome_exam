import axios from "axios";
import store from "../state/store/configureStore";


const { dispatch } = store;
const NewsService = {
  async index() {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=34f52ce4c9a94eba938e22547fe25a9d"
      // {
      //   params: {
      //     apiKey: process.env.REACT_APP_NEWS_API_KEY,
      //   },
      // }
    );
    
    dispatch({ type: "SET_NEWS_FEED", payload: response.data.articles });
  },

  async search(query) {},
};

export default NewsService;
