import React from 'react';
import styled from 'styled-components';

const LeftArrow = (props) => {
  return (
    <a
      href="#"
      className="carousel__arrow carousel__arrow--left"
      onClick={props.prevSlide}
    >
      <span className="fas fa-chevron-left"></span>
    </a>
  );
};

export default LeftArrow;
