import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

import Arrows from './Arrows.jsx';

const RightArrow = (props) => (
  <Arrows onClick={props.nextSlide}>
    <FontAwesomeIcon icon={faChevronRight} />
  </Arrows>
);

export default RightArrow;
