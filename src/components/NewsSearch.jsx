import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsService from "../modules/NewsService";
import NewsCard from "./NewsCard";
import { Input, Button, Grid } from "semantic-ui-react";

const NewsSearch = () => {
  const { searchResult } = useSelector((state) => state);
  const dispatch = useDispatch();

  const performSearch = async (event) => {
    const query = event.target.value;
    const response = await NewsService.search(query);

    dispatch({
      type: "SET_SEARCH_FEED",
      payload: response.data.articles,
    });
  };
  // const articleList = searchResult.map((article) => {
  //   return <NewsCard article={article} />;
  // });

  return (
    <>
      <Input
        data-cy="search_field"
        placeholder="Search..."
        //onChange={performSearch}
      />
      <Button data-cy="search_button" name="search" onClick={performSearch}>
        Search
      </Button>
      {/* <Grid data-cy="articles-list">{articleList}</Grid>; */}
    </>
  );
};

export default NewsSearch;
