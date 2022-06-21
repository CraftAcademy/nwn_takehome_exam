import React, { useState, useEffect } from 'react'
import NewsSearch from './components/NewsSearch'
import { Container, Menu, Header, Image } from 'semantic-ui-react'
import NewsIndex from './components/NewsIndex'

import logo from './nwn.png'

const App = () => {
  const [headlines, setHeadlines] = useState([])

  return (
    <>
      <Menu style={{ borderRadius: 0, background: '' }}>
        <Menu.Item data-cy="header">
          <Image src={logo} size="tiny" centered />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <NewsSearch />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Container>
        <Header as="h2">News Wire Network</Header>
        <p>Top News Headlines from around the world</p>
        <NewsIndex headlines={headlines} />
      </Container>
    </>
  )
}

export default App
