// src/SliderStyles.js

import styled, { keyframes } from 'styled-components';

// Keyframes for the sliding animation
export const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

// Styled component for the slider
export const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
`;

export const Slider = styled.div`
  display: flex;
  width: 1000%;
  animation: ${slide} 30s linear infinite;
`;

export const Slide = styled.div`
  flex: 0 0 33.33%;
  max-width: 33.33%;
  box-sizing: border-box;
  padding: 10px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;