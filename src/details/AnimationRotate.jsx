import React from 'react';
import './AnimationRotate.css';
import { useNavigate } from 'react-router-dom';

const images = [
  { id: 1, src: "/image/image1.png", alt: "Image 1" },
  { id: 2, src: "/image/image2.png", alt: "Image 2",},
  { id: 3, src: "/image/image3.png", alt: "Image 3" },
  { id: 4, src: "/image/image4.png", alt: "Image 4" },
  { id: 5, src: "/image/image5.png", alt: "Image 5" },
  { id: 6, src: "/image/image6.png", alt: "Image 6" },
  { id: 7, src: "/image/image7.png", alt: "Image 7" },
  { id: 8, src: "/image/image8.png", alt: "Image 8" },
  { id: 9, src: "/image/image9.png", alt: "Image 9" },
  { id: 10, src: "/image/exeter-image.png", alt: "Image 10" },
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
            <h3>Fullstack Developer</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimationRotate;

// import React from 'react';
// import './AnimationRotate.css';

// const AnimationRotate = () => {
//   return (
//     <div className="banner">
//       <div className="slider" style={{ "--quantity": 10 }}>
//         <div className="item" style={{ "--position": 1 }}><img src="/image/image1.png" alt=""/></div>
//         <div className="item" style={{ "--position": 2 }}><img src="/image/image2.png" alt=""/></div>
//         <div className="item" style={{ "--position": 3 }}><img src="/image/image3.png" alt=""/></div>
//         <div className="item" style={{ "--position": 4 }}><img src="/image/image4.png" alt=""/></div>
//         <div className="item" style={{ "--position": 5 }}><img src="/image/image5.png" alt=""/></div>
//         <div className="item" style={{ "--position": 6 }}><img src="/image/image6.png" alt=""/></div>
//         <div className="item" style={{ "--position": 7 }}><img src="/image/image7.png" alt=""/></div>
//         <div className="item" style={{ "--position": 8 }}><img src="/image/image8.png" alt=""/></div>
//         <div className="item" style={{ "--position": 9 }}><img src="/image/image9.png" alt=""/></div>
//         <div className="item" style={{ "--position": 10 }}><img src="/image/exeter-image.png" alt=""/></div>
//       </div>
//     </div>
//   );
// }

// export default AnimationRotate;

