import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3; // Assuming you have 3 slides

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    const slides = [
        {
            image: '/Header2.gif',
            buttonText: 'Shop now',
            link: '/products'
        },
        {
            image: '/Header1.gif',
            buttonText: 'Shop now',
            link: '/products'
        },
        {
            image: '/Header4.gif',
            buttonText: 'Shop now',
            link: '/products'
        }
    ];

    return (
        <div className='header'>
            <div className='header-background' style={{ backgroundImage: `url(${slides[currentSlide].image})` }} />
            <div className='header-contents'>
                <h2>{slides[currentSlide].title}</h2>
                <p>{slides[currentSlide].description}</p>
                <a href={slides[currentSlide].link}><button>{slides[currentSlide].buttonText}</button></a>
            </div>
            <div className="nav-buttons">
                <button onClick={goToPrevSlide}>&lt;</button>
                <button onClick={goToNextSlide}>&gt;</button>
            </div>
        </div>
    );
}

export default Header;
