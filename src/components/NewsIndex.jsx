import React from 'react'
import { useSelector } from 'react-redux'
import NewsCard from './NewsCard'

// const { headlines } = useSelector((state) => state)

const NewsIndex = ({ headlines }) => {
  const headlinesDisplay = headlines.map((headline) => {
    return <NewsCard key={headline.index} headline={headline} />
  })

  return <div data-cy="news-collection">{headlinesDisplay}</div>
}

export default NewsIndex
