import React from 'react';
import "./Card.css";
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';

function Card({ card }) {
    const { id, title, price, link, image, rating } = card;

    return (
        <div className='card'>
                <div>
                    <img className='cardImage' src={image} alt={title} />
                </div>
                <div>
                    <h4 className='title'>{title}</h4>
                </div>
                <div>
                    <p className='card-desc'>{price}</p>
                </div>

                <div className=' cardPoint'>
                    <div style={{ marginTop: "10px" }}>
                        <Rating className='shoeRating' name="read-only" value={rating} readOnly />
                    </div>
                </div>
                <div style={{ margin: "20px", display: "flex", justifyContent: "center" }}>
                    <Button className='cardButton'>
                        Buy Now
                    </Button>
                </div>
        </div>
    );
}

export default Card;