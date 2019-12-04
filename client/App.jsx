import React from 'react';
import styled from 'styled-components';

import Carousel from './Carousel.jsx';

const Item = styled.div`
  background: blue;
  text-align: center;
  padding: 50px;
  color: yellow;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Carousel title="Carousel">
        <Item>Item</Item>
        <Item>Item</Item>
        <Item>Item</Item>
        <Item>Item</Item>
      </Carousel>
    );
  }
}

export default App;
