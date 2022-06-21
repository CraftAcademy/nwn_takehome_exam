import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
const apiURL = 'https://newsapi.org/v2/'
const headlineEndpoint = 'top-headlines'

const NewsService = () => {
  const dispatch = useDispatch()

  const fetchHeadlines = async () => {
    const headline = await axios.get(apiURL + headlineEndpoint, {
      params: {
        country: 'gb',
        apiKey: process.env.REACT_APP_NEWSKEY,
        size: 10,
      },
    })
    dispatch({ type: 'SET_NEWS_FEED', payload: headline.data.articles })
  }
  useEffect(() => {
    fetchHeadlines()
  }, [])
}

export default NewsService
