import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

import Arrows from './Arrows.jsx';
import TestLeftArrow from './TestLeftArrow.jsx';

const LeftArrowContainer = styled.div`
  grid-area: l;
  z-index: 10;
  background-color: white;
  display: grid;
  place-items: center;
`;

const LeftArrow = (props) => {
  if (props.clicked) {
    return (
      <LeftArrowContainer>
        <Arrows onClick={props.prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Arrows>
      </LeftArrowContainer>
    );
  } else {
    return (
      <LeftArrowContainer>
        <TestLeftArrow onClick={props.prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </TestLeftArrow>
      </LeftArrowContainer>
    )
  }

};

export default LeftArrow;
