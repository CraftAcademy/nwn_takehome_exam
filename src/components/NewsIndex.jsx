import React from 'react'
import { useSelector } from 'react-redux'
import NewsService from '../modules/NewsService'
import NewsCard from './NewsCard'


const NewsIndex = () => {
  const { newsIndex } = useSelector((state) => state);

 useEffect(() => {
   NewsService.index();
 }, []);   
  
  return (
    <>
      <NewsCard />
    </>
  )
}

export default NewsIndex
