import React, { useState, useEffect } from 'react';
import './ImageSlider2.css';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 10; // Number of slides

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
        }, 4000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    const offset = -currentIndex * 100;

    return (
        <div className="image-slider">
            <div className="image-slides" style={{ transform: `translateX(${offset}%)` }}>
                <div className="image-slide"><h1><img src="image/hotel.jpg" alt="" /></h1></div>
                <div className="image-slide"><img src="/image/image10.png" alt="" /></div>
                <div className="image-slide"><img src="/image/image2 (9).png" alt="" /></div>
                <div className="image-slide"><img src="/image/image2.png" alt="" /></div>
                <div className="image-slide"><img src="/image/image3.png" alt="" /></div>
                <div className="image-slide"><img src="/image/image4.png" alt="" /></div>
                <div className="image-slide"><img src="/image/image5.png" alt="" /></div>
                <div className="image-slide"><img src="/image/image6.png" alt="" /></div>
                <div className="image-slide"><img src="/image/image7.png" alt="" /></div>
                <div className="image-slide"><img src="/image/image8.png" alt="" /></div>
            </div>
        </div>
    );
};

export default Slider;