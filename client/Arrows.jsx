import styled from 'styled-components';

const Arrows = styled.button`
  position: absolute;
  top: 50%;
  display: block;
  color: blue;
  cursor: pointer;
  opacity: 0.75;
  transform: translateY(-50%);
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: 0.5;
  }

  &--left {
    left: 32px;
  }

  &--right {
    right: 32px;
  }
`;

export default Arrows;
