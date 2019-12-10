import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

import Arrows from './Arrows.jsx';

const RightArrowContainer = styled.div`
  grid-area: r;
  z-index: 10;
  background-color: white;
`;

const RightArrow = (props) => (
  <RightArrowContainer>
    <Arrows onClick={props.nextSlide}>
      <FontAwesomeIcon icon={faChevronRight} />
    </Arrows>
  </RightArrowContainer>
);

export default RightArrow;
