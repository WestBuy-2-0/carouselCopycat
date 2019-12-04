import React, {Component} from 'react';
import styled from 'styled-components';

import Carousel from './Carousel.jsx';

const Product = styled.div`
  background: blue;
  text-align: center;
  padding: 50px;
  color: yellow;
`

class App extends Component {
  constructor() {
    super();
    this.state = {};
  };

  render() {
    return (
      <div>
       <Carousel title="Carousel">
        <Product>Product</Product>
        <Product>Product</Product>
        <Product>Product</Product>
        <Product>Product</Product>
      </Carousel>
      </div>
    );
  };
};

export default App;
