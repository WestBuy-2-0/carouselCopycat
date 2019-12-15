import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

import Arrows from './Arrows.jsx';
import GrayArrows from './GrayArrows.jsx';

const RightArrowContainer = styled.div`
  grid-area: r;
  z-index: 10;
  background-color: white;
  display: grid;
  place-items: center;
`;

const RightArrow = (props) => {
  if (props.currentPage === 1) {
    return (
      <RightArrowContainer>
        <Arrows onClick={() => {
          props.nextSlide();
          props.handleCurrentPage("right");
        }}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Arrows>
      </RightArrowContainer>
    );
  } else {
    return (
      <RightArrowContainer>
        <GrayArrows>
          <FontAwesomeIcon icon={faChevronRight} />
        </GrayArrows>
      </RightArrowContainer>
    );
  }
};

export default RightArrow;
