import PropTypes from 'prop-types';

function QuoteCard(props) {

    return (
  
        <figure className="QuoteCard">
            <img
                src={props.image}
                alt={props.character}
            />
            <figcaption>
                <blockquote>
                    {props.quote}
                </blockquote>
                <cite>{props.character}</cite>
            </figcaption>
        </figure>
  
    );
  
  }

QuoteCard.propTypes = {
    image: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
};

export default QuoteCard;