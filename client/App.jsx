import React, {Component} from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Title>Hello World, this is my first styled component!</Title>
      </Wrapper>
    );
  }
}

export default App;
