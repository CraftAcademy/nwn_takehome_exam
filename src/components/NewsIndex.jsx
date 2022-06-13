import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import { Grid } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const NewsIndex = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.newsFeed);

  useEffect(() => {
    getTopHeadlines();
  }, []);

  const getTopHeadlines = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    dispatch({ type: "SET_NEWS_FEED", payload: response.data.articles });
  };
  const listOfTopHeadlines = articles.map((article) => {
    return <NewsCard article={article} />;
  });
  return (
    <>
      <Grid data-cy="articles">{listOfTopHeadlines}</Grid>
    </>
  );
};

export default NewsIndex;
