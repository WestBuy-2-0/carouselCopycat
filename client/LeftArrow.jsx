import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

import Arrows from './Arrows.jsx';
import GrayArrows from './GrayArrows.jsx';

const LeftArrowContainer = styled.div`
  grid-area: l;
  z-index: 10;
  background-color: white;
  display: grid;
  place-items: center;
`;

const LeftArrow = (props) => {
  if (props.rightClicked) {
    return (
      <LeftArrowContainer>
        <Arrows onClick={() => {props.prevSlide(); props.leftArrowClick()}}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Arrows>
      </LeftArrowContainer>
    );
  } else {
    return (
      <LeftArrowContainer>
        <GrayArrows onClick={props.prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </GrayArrows>
      </LeftArrowContainer>
    );
  };
};

export default LeftArrow;
