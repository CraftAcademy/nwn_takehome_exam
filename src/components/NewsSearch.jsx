import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button } from "semantic-ui-react";
import axios from "axios";

const NewsSearch = () => {
  const [searchValue, setSearchValue] = useState();

  const dispatch = useDispatch();
  
  const getSearchResponse = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=bitcoin${searchValue}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    dispatch({ type: "SET_NEWS_FEED", payload: response.data.articles });
    debugger
  };

  return (
    <>
      <Input
        data-cy="input_search"
        placeholder="Search..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Button data-cy="search_btn" onClick={() => getSearchResponse}>
        Search
      </Button>
    </>
  );
};

export default NewsSearch;
