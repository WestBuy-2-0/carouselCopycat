import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

import Arrows from './Arrows.jsx';

const LeftArrowContainer = styled.div`
  grid-area: l;
  z-index: 10;
  background-color: white;
`;

const LeftArrow = (props) => (
  <LeftArrowContainer>
    <Arrows onClick={props.prevSlide}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Arrows>
  </LeftArrowContainer>
);

export default LeftArrow;
