import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

import Arrows from './Arrows.jsx';

const LeftArrow = (props) => (
  <Arrows onClick={props.prevSlide}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </Arrows>
);

export default LeftArrow;
