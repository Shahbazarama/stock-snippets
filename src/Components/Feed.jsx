import React from 'react'
import Tweet from './Tweet.jsx'
import { Container, Col, Row, Card } from 'react-bootstrap'

export default function Feed(){
  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </Col>
      </Row>
    </Container>
  )
}
