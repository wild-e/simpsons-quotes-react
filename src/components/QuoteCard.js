function QuoteCard() {

    return (
  
        <figure className="QuoteCard">
            <img
                src={image}
                alt={character}
            />
            <figcaption>
                <blockquote>
                    {quote}
                </blockquote>
                <cite>{character}</cite>
            </figcaption>
        </figure>
  
    );
  
  }

const image = "https://pm1.narvii.com/7070/aeaeadea89d89327a8e5f4f83d10272dc337425fr1-1200-1200v2_128.jpg";
const quote = " 'Shoplifting is a victimless crime, like punching someone in the dark.' ";
const character = "Nelson Muntz";

export default QuoteCard;