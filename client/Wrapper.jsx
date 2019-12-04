// Wrap CarouselContainer in a Wrapper component to prevent page from scrolling.

import styled from 'styled-components';

// Overflow property hides any components extending beyond the container.
const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export default Wrapper;
