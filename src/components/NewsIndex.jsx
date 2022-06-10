import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import NewsService from "../modules/NewsService";
//import NewsCard from "./NewsCard";

const NewsIndex = () => {
  const { newsFeed } = useSelector((state) => state);

  useEffect(() => {
    NewsService.index();
  }, []);

  return (
    <>
      
    </>
  );
};

export default NewsIndex;
