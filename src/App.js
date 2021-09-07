import QuoteList from './components/QuoteList';
import './App.css';
import React from 'react';


const sampleQuotes = [
  {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
    quote: "Nothing you say can upset us. We're the MTV generation.",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
  },
  {
    quote: "That's where I saw the leprechaun...He told me to burn things.",
    character: "Ralph Wiggum",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
  },
  {
    quote:
      "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone.",
    character: "Principal Skinner",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460"
  }
];

function App() {

  const [quotes, setQuotes] = React.useState(sampleQuotes);

  function fetchQuotes() {
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=4")
    .then(res => res.json())
    .then(
      (result) => {
        setQuotes(result);
        console.log(result);
      },
      (e) => {
        console.log(e);
      }
    )
  }

  return (
    <div className="App">
      <button type="button" onClick={fetchQuotes}>Get your Quotes !</button>
      <QuoteList quotes={quotes}/>
    </div>
  );
}

export default App;
