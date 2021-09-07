import QuoteCard from './QuoteCard';
import React from 'react';

function QuoteList({ quotes }) {

  return (
    quotes && (
  <div>
    {quotes.map(item => (
        <QuoteCard 
            image = {item.image}
            quote = {item.quote}
            character = {item.character}
            key={item.quote}
        />
    ))}
  </div>
    )
  );
}

export default QuoteList;
