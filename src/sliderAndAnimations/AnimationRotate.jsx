import React from 'react';
import './AnimationRotate.css';
import { useNavigate } from 'react-router-dom';

const images = [
  { id: 1, src: "/image/r1.png", alt: "Image 1", title: "React JS" },
  { id: 2, src: "/image/r11.png", alt: "Image 2", title: "Next JS"},
  { id: 3, src: "/image/r3.png", alt: "Image 3", title: "HTML" },
  { id: 4, src: "/image/r4.png", alt: "Image 4", title: "CSS" },
  { id: 5, src: "/image/r5.png", alt: "Image 5", title: "JavaScript" },
  { id: 6, src: "/image/r6.png", alt: "Image 6", title: "Tailwind Css" },
  { id: 7, src: "/image/r7.png", alt: "Image 7", title: "Bootstrap" },
  { id: 8, src: "/image/r8.png", alt: "Image 8", title: "Mongo DB" },
  { id: 9, src: "/image/r9.png", alt: "Image 9", title: "Node JS" },
  { id: 10, src: "/image/r10.png", alt: "Image 10", title: "Express JS" },
];

const AnimationRotate = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(("/works"))
  }
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": images.length }}>
        {images.map((image, index) => (
          <div key={image.id} className="item" style={{ "--position": index + 1 }}>
            <img src={image.src} alt={image.alt}  onClick={handleNavigate} />

            <h4>{image.title}</h4>

          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimationRotate;
