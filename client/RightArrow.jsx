import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

// import Arrows from './Arrows.jsx';

const RightArrow = (props) => (
  <button onClick={props.nextSlide}>
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);

export default RightArrow;
