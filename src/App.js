import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import Quote from './components/quote'

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Ariel, Helvetica, sans-serif;
  color: #fff;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;

`

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

function App() {

  const [quote, setQuote] = useState({
    
  })

  useEffect(() => {
    getJSON()
  }, [])

  const getJSON = async () => {
    const result = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quote = await result.json()
    setQuote(quote[0])
  }
  return (
    <Container>
      <Quote 
        quote={quote}
      />
      <Button
        onClick={getJSON}
      >Get Phrase</Button>
    </Container>
  );
}

export default App;
