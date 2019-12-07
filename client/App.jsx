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
      <Carousel title="People Also Bought">
        <Item>{productItem}</Item>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
        <Item>Item 6</Item>
        <Item>Item 7</Item>
        <Item>Item 8</Item>
        <Item>Item 9</Item>
        <Item>Item 10</Item>
        <Item>Item 11</Item>
      </Carousel>
    );
  };
};

export default App;
