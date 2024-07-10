// src/ImageSlider.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Keyframes for the sliding animation
const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

// Styled component for the slider
const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
`;

const Slider = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  animation: ${slide} 30s linear infinite;
`;

const Slide = styled.div`
  flex: 0 0 33.33%;
  max-width: 33.33%;
  box-sizing: border-box;
  padding: 10px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
`;

const images = [
  '/image/enspace-image.png',
  '/image/unilag-image.png',
  '/image/web1-image.png',
  '/image/web3-image.png',
  '/image/web2-image.png',
  '/image/web4-image.png',
  '/image/web5-image.png',
  '/image/web8-image.png',
  '/image/web7-image.png',
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SliderWrapper>
      <Slider style={{ transform: `translateX(-${index * 33.33}%) `}}>
        {images.map((src, i) => (
          <Slide key={i}>
            <Image src={src} alt={`Slide ${i + 3} `} />
          </Slide>
        ))}
      </Slider>
      <div><Link to={"/"}><button  style={{padding:"10px", color:"red", margin:"40px"}}>Go back</button></Link></div>
    </SliderWrapper>
  );
};

export default ImageSlider;