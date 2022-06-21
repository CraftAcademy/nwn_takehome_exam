import React from 'react'
import { Header, Card } from 'semantic-ui-react'
import { useSelector, useDispatch } from "react-redux";

const NewsCard = (headline) => {
  return (
    <Card
      header={headline.title}
      image={headline.urlToImage}
      meta={`By: ${headline.author} at ${headline.source.name}`}
      description={headline.description}
      extra={<Header as="h2">{`Published at ${headline.publishedAt}`}</Header>}
      href={headline.url}
    />
  )
}

export default NewsCard
