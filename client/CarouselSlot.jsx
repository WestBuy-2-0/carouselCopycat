// CarouselSlot component allows for the styling of each child.

import styled from 'styled-components';

/* When going to the next or previous slide, we are changing the order property
on each child rather than manipulating the DOM.

Ordering with Flexbox:  A flexbox container presents its children in the order specified
by the order property (from low to high). */
const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 15%;
  margin-right: 20px;
  order: ${(props) => props.order};
`;

export default CarouselSlot;
