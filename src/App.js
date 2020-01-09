import React from 'react';
import Search from './Components/Search.jsx'
import Feed from './Components/Feed.jsx'

import { Container, Col, Row, Navbar } from 'react-bootstrap'

export default function App(){
  return (
    <>
    <Container style={{ paddingBottom: '60px'}}>
      <Navbar fixed="top" className="justify-content-between" bg="dark" expand="lg">
        <Navbar.Brand bg="light">Stock Snippets</Navbar.Brand>
        <Search />
      </Navbar>
    </Container>

    <Container>
      <Row>
        <Col>

          <Feed />
        </Col>

      </Row>
    </Container>
    </>
  )
}
