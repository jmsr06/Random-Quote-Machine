import { useEffect, useState } from 'react'
const url = 'https://api.quotable.io/random'

function App() {

  let newQuote = ''

  useEffect(() => {
    randomColor()
    newQuote = fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((quote) => { setQuote(quote) })
  }, [])

  const [quote, setQuote] = useState(newQuote)

  const handleNewQuote = () => {
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((quote) => { setQuote(quote) })
    randomColor()
  }
  const randomColor = () => {
    const body = document.querySelector('#body')
    const buttons = document.querySelectorAll('.button')
    const color1 = parseInt(Math.random() * 255)
    const color2 = parseInt(Math.random() * 255)
    const color3 = parseInt(Math.random() * 255)
    body.style.backgroundColor = `rgb(${color1},${color2},${color3})`
    body.style.color = `rgb(${color1},${color2},${color3})`
    buttons.forEach((button) => {
      button.style.backgroundColor = `rgb(${color1},${color2},${color3})`
    })
  }
  return (
    <div className="container">
      <div id="quote-box">
        <div id="text">
          <i className="fa-solid fa-quote-left"></i>
          <span className='content'>
            {quote.content}
          </span>
        </div>
        <div id="author">
          - {quote.author}
        </div>
        <div className='btn-container'>
          <button className='button' onClick={handleNewQuote} id="new-quote">New quote</button>
          <a className='button' id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote.content}" - ${quote.author}`} target="_blank"><i className="fa-brands fa-twitter"></i></a>
        </div>
      </div>
    </div>
  )
}

export default App
