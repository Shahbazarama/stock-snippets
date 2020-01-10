import React, { useState } from 'react';
import Search from './Components/Search.jsx'
import Feed from './Components/Feed.jsx'

import { Container, Col, Row, Navbar } from 'react-bootstrap'

export default function App(){

  const [data, setData] = useState([]);

  return (
    <>
      <Navbar className="justify-content-between" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand bg="light">Stock Snippets</Navbar.Brand>
        <Search callback={setData}/>
      </Navbar>

    <Container>
      <Row>
        <Col>
          {data.length == 0 ? <h3>Search for a stock or two!</h3> : <></>}
          <Feed data={data}/>
        </Col>

      </Row>
    </Container>
    </>
  )
}
