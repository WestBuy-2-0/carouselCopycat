import styled from 'styled-components';

const Sizing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  max-width: 1600px;
  min-width: 992px;
  padding-left: 30px !important;
  padding-right: 30px !important;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    width: 100%;
  }
`;

export default Sizing;
