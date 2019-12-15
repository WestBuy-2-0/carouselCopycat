import styled from 'styled-components';

const Sizing = styled.div`
  max-width: 1600px;
  min-width: 992px;
  padding: 0 30px 0 30px;

  @media screen and (min-width: 1200px) {
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    width: 100%;
  }
`;

export default Sizing;
