import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'
import "./styles.css

const quoteData = [
  { text: `"The purpose of our lives is to be happy."`, author: "Dalai Lama" },
  { text: `"Life is what happens when you're busy making other plans."`, author: "John Lennon" },
  { text: `"Get busy living or get busy dying."`, author: "Stephen King" },
  { text: `"You only live once, but if you do it right, once is enough."`, author: "Mae West" },
  { text: `"Many of life’s failures are people who did not realize how close they were to success when they gave up."`, author: "Thomas A. Edison" },
  { text: `"If you want to live a happy life, tie it to a goal, not to people or things."`, author: "Albert Einstein" },
  { text: `"Never let the fear of striking out keep you from playing the game."`, author: "Babe Ruth" },
  { text: `"Money and success don’t change people; they merely amplify what is already there."`, author: "Will Smith" },
  { text: `"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."`, author: "Steve Jobs" },
  { text: `"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it."`, author: "Henry Ford" },
]

const QuoteBox = ({ quote, handleNewQuote }) => {
  return (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <h2 id="author"> - {quote.author}</h2>
      <div className="actions">
        <button 
          id="new-quote" 
          className="button" 
          onClick={handleNewQuote}
         >
            New Quote
        </button>
        <a
          href="https://twitter.com/intent/tweet"
          id="tweet-quote"
          target="_blank"
          >
            Tweet
        </a>
      </div>
    </div>
  )
}

const getRandomIndex = () => {
  return Math.round(Math.random() * ((quoteData.length - 1) - 0) + 0)
}

const App = () => {
  
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
  }
  
  return (
    <div className="main">
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
