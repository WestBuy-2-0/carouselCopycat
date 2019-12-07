// Base carousel structure
import React from 'react';
import styled from 'styled-components';

import Carousel from './Carousel.jsx';
import ProductItem from './ProductItem.jsx';
import ProductData from './ProductData.jsx';

const Item = styled.div`
  background: blue;
  text-align: center;
  padding: 50px;
  color: yellow;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: ProductData
    };
  };

  render() {

    let productItem = this.state.items.map(product => <ProductItem key={product.id}
    productItem={product} />);

    return (
      <Carousel title="People also bought">
        {productItem}
      </Carousel>
    );
  };
};

export default App;
