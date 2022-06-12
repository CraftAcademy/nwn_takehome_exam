import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import NewsService from "../modules/NewsService";
import NewsCard from "./NewsCard";

const NewsIndex = () => {
  const { articles } = useSelector((state) => state);

  useEffect(() => {
    NewsService.index();
  }, []);

  const newsList = articles.map((article) => {
    return (
     
      <NewsCard article={ article}/>
    );
  });

  return (
     
    <>
      <Grid data-cy="news-list">
        {newsList}
      </Grid>
    </>
  );
  
};

export default NewsIndex;
