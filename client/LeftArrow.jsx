import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

// import Arrows from './Arrows.jsx';

const LeftArrow = (props) => (
  <button onClick={props.prevSlide}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
);

export default LeftArrow;
