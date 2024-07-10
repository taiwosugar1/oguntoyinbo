// src/ImageSlider.js

import React, { useEffect, useState } from 'react';
import { SliderWrapper, Slider, Slide, Image } from './SliderStyles';
import images from './Images';

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <SliderWrapper>
      <Slider style={{ transform: `translateX(-${index * 33.33}%)` }}>
        {images.map((image, i) => (
          <Slide key={i}>
            <Image src={image.src} alt={image.alt} />
          </Slide>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default ImageSlider;