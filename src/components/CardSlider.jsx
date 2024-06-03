import React, { useState } from 'react';
import './CardSlider.css';

const CardSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const cards = [
        { id: 1, title: "Card 1", content: "Content for Card 1", image: "src/assets/aykb1.png" },
        { id: 2, title: "Card 2", content: "Content for Card 2", image: "src/assets/aykb1.png" },
        { id: 3, title: "Card 3", content: "Content for Card 3", image: "src/assets/aykb1.png" },
        { id: 4, title: "Card 4", content: "Content for Card 4", image: "src/assets/aykb1.png" },
        { id: 5, title: "Card 5", content: "Content for Card 5", image: "src/assets/aykb1.png" },
        { id: 1, title: "Card 1", content: "Content for Card 1", image: "src/assets/aykb1.png" },
        { id: 2, title: "Card 2", content: "Content for Card 2", image: "src/assets/aykb1.png" },
        { id: 3, title: "Card 3", content: "Content for Card 3", image: "src/assets/aykb1.png" },
        { id: 4, title: "Card 4", content: "Content for Card 4", image: "src/assets/aykb1.png" },
        { id: 5, title: "Card 5", content: "Content for Card 5", image: "src/assets/aykb1.png" },
    ];

    const nextSlide = () => {
        if (currentSlide === cards.length - 4) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(cards.length - 4);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <div className="slider-container">
            <button className="prev" onClick={prevSlide}>❮</button>
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100 / 4}%)` }}>
                {cards.map((card, index) => (
                    <div className="slide" key={index}>
                        <div className="card">
                            <img src={card.image} alt={card.title} />
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                        </div>
                    </div>
                ))}
                {cards.slice(0, 4).map((card, index) => (
                    <div className="slide" key={`clone-${index}`}>
                        <div className="card">
                            <img src={card.image} alt={card.title} />
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default CardSlider;
