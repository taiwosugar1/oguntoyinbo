import React from 'react';
import './LogoAnimation.css'; 

const LogoAnimation = () => {
  return (
    <div className="logo-animation">
      <svg viewBox="0 0 960 300" className='svg'>
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            MULTIBRAND
          </text>
        </symbol>
        <g className="ants">
          <use xlinkHref="#s-text" className="logo-copy"></use>
          <use xlinkHref="#s-text" className="logo-copy"></use>
          <use xlinkHref="#s-text" className="logo-copy"></use>
          <use xlinkHref="#s-text" className="logo-copy"></use>
          <use xlinkHref="#s-text" className="logo-copy"></use>
          <use xlinkHref="#s-text" className="logo-copy"></use>
          <use xlinkHref="#s-text" className="logo-copy"></use> 
        </g>
      </svg>
    </div>
  );
};

export default LogoAnimation;