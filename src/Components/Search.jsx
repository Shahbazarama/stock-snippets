import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
export default function Search({ callback }){

  const [search, setSearch] = useState("");

  const handleSubmit = (evt) => {
      evt.preventDefault();
      const rawSearch = new FormData(evt.target);

      // separate stock terms from search form
      const splitSearch = rawSearch.get('search').replace(/\s/g,'').split(',');

      // call api for each search term
      const allTweets = []

      Promise.all(splitSearch.map(stock => fetch(`https://cors-anywhere.herokuapp.com/https://api.stocktwits.com/api/2/streams/symbol/${stock}.json`))).then(responses =>
        Promise.all(responses.map(res => res.json()))
      ).then(data => {
        console.log(data)
        if(data[0].response.status == 404){
        alert('Invalid search term, try GOOG or BB')
      } else {
        data.forEach(search => {
          search.messages.forEach(message => {
            allTweets.push(message)
          })
      })
      callback(allTweets)
      }
      })
  }

  return (
    <Form inline onSubmit={handleSubmit}>
      <Form.Control name="search" type="text" placeholder="search for some stocks" className="mr-sm-2" onChange={e => setSearch(e.target.value)}/>
      <Button type="submit" variant="outline-info" className="mr-sm-2">Search</Button>
    </Form>
  )
}
