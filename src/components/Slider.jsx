import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

const Slider = ({ images, direction }) => {
  const sliderRef = useRef(null);

  const handleMouseEnter = () => {
    sliderRef.current.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    sliderRef.current.style.animationPlayState = 'running';
  };

  const sliderClass = direction === 'left' ? 'slider-left' : 'slider-right';

  return (
    <div className="slider-container">
      <div
        className={`slider ${sliderClass}`}
        ref={sliderRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
         {[...images, ...images].map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Slide ${index}`} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            className='hover:cursor-pointer rounded-md'
          />
        ))}
      </div>
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
