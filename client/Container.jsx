import styled from 'styled-components';

// Overflow property hides any components extending beyond the container.
const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 5% 90% 5%;
  grid-template-areas: "l c r";
`;

export default Container;
