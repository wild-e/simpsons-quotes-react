import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar
        simpsonQuotesUrl = "https://fr.wikipedia.org/wiki/Les_Simpson"
      />
      <QuoteCard 
        image = "https://pm1.narvii.com/7070/aeaeadea89d89327a8e5f4f83d10272dc337425fr1-1200-1200v2_128.jpg"
        quote = " 'Shoplifting is a victimless crime, like punching someone in the dark.' "
        character = "Nelson Muntz"
      />
      <QuoteCard 
        image = "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        quote = " 'That's where I saw the leprechaun...He told me to burn things.' "
        character = "Ralph Wiggum"
      />
    </div>
  );
}

export default App;
