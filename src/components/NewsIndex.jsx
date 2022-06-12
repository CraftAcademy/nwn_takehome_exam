import React from "react";
import NewsCard from "./NewsCard";
import { useSelector, useDispatch } from "react-redux";

const NewsIndex = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.newsFeed);

  useEffect(() => {
    NewsSerevice.index(dispatch);
  }, []);

  let listOfTopHeadlines = articles.map(() => {
    return <NewsCard article={article} />;
  });

  return (
    <>
      <Grid data-cy="articles">{listOfTopHeadlines}</Grid>
    </>
  );
};

export default NewsIndex;
