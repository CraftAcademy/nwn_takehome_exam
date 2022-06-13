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

  }
}

export default NewsService