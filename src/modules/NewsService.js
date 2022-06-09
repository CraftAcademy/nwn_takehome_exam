import NewsAPI from "./NewsAPI";

const NewsService = {

  async index() {
    const response = await NewsAPI.get("/articles");
    dispatch({ type: "SET_NEWS_FEED", payload: response.data.articles });

  },

  async search(query) {

  }
}

export default NewsService