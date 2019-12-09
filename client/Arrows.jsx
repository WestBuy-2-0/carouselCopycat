import styled from 'styled-components';

const Arrows = styled.button`
  position: absolute;
  top: 50%;
  display: block;
  color: rgb(0, 30, 115);
  cursor: pointer;
  opacity: 0.75;
  transform: translateY(-50%);
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
`;

export default Arrows;
