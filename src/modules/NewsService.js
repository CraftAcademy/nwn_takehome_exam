import axios from 'axios'

const NewsService = {
  async index(load) {
    let result = await axios.get(
      `https://newsapi.org/v2/top-headlines?&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    load({
      type: "LOAD_NEWS_FEED",
      payload: result.data.articles
    });
  },

  async search(query) {
    let result = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    return result.data.articels;
  }
}

export default NewsService