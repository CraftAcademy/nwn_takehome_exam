import React from 'react'
import { Header, Card } from 'semantic-ui-react'

const NewsCard = (props) => {
  return (
    <Card
      image={props.article.urlToImage}
      header={props.article.title}
      meta={`By: ${props.article.author} at ${props.article.source.name}`}
      description={props.article.description}
      extra={<Header as="h6">`Published at ${props.news.publishedAt}`</Header>}
    />
  );
}

export default NewsCard
