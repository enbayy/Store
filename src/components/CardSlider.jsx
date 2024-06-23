import React, { useState } from 'react';
import './CardSlider.css';

const CardSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const cards = [
        { id: 1, title: "Yeezy Boost 750", content: "Adidas Yeezy Boost 750", image: "src/assets/ad5.png" },
        { id: 2, title: "Adidas Tubular", content: "Adidas Tubular Nova Primeknit", image: "src/assets/ad7.png" },
        { id: 4, title: "NMD_R1 Primeknit", content: "Adidas NMD_R1 Primeknit", image: "src/assets/ad4.png" },
        { id: 1, title: "Gazelle 85 Low", content: "ADIDAS GAZELLE 85 LOW", image: "src/assets/ad6.png" },
        { id: 3, title: "NMD_R1", content: "Adidas NMD_R1", image: "src/assets/ad3.png" },
        { id: 3, title: "ZX Flux", content: "Adidas ZX Flux", image: "src/assets/ad8.png" },
        { id: 4, title: "Yeezy Stan Smith Sneakers", content: "Adidas Yeezy Stan Smith Sneakers", image: "src/assets/ad9.png" },
        { id: 5, title: "X_PLR", content: "Adidas X_PLR", image: "src/assets/ad10.png" },
        { id: 5, title: "Ultra Boost", content: "Adidas Ultra Boost 1.0 White Rainbow Sports shoes", image: "src/assets/ad1.png" },
    ];

    const nextSlide = () => {
        if (currentSlide === cards.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(cards.length - 1);
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
                        <div className="cardSlide">
                            <img src={card.image} alt={card.title} />
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                        </div>
                    </div>
                ))}
                {cards.slice(0, 4).map((card, index) => (
                    <div className="slide" key={`clone-${index}`}>
                        <div className="cardSlide">
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
