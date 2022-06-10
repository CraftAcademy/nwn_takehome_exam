import store from "../state/store/configureStore";
import NewsAPI from "./NewsAPI";

const { dispatch } = store;
const NewsService = {
  async index() {
    const response = await NewsAPI.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=34f52ce4c9a94eba938e22547fe25a9d"
    );
    debugger
    dispatch({ type: "SET_NEWS_FEED", payload: response.data });
  },

  async search(query) {},
};

export default NewsService;
