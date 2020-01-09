import React from 'react'
import { Form } from 'react-bootstrap'
export default function Search(){
  return (
    <Form inline>
      <Form.Control type="text" placeholder="search for some stocks" />
    </Form>
  )
}
