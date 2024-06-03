import React from 'react';
import "./Card.css";
import Rating from '@mui/material/Rating';  // Import the Rating component from Material-UI

function Card({ card }) {
    const { id, title, price, link, image, rating } = card;

    return (
        <div className='card'>
            <div>
                <img className='cardImage' src={image} alt={title} />
                <h4 className='title'>{title}</h4>
                <p className='card-desc'>{price}</p>
                <div className='row cardPoint'>
                    <div>
                        <Rating className='shoeRating' name="read-only" value={rating} readOnly />
                    </div>
                    <div>
                        {rating}
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    );
}

export default Card;