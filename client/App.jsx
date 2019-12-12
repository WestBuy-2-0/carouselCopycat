// Base carousel structure
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
      items: []
    };
    this.getProducts = this.getProducts.bind(this);
  };

  componentDidMount() {
    this.getProducts();
  };

  getProducts() {
    axios.get('/products')
    .then(response => {
      this.setState({
        items: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
  };

  render() {

    let productItem = this.state.items.map(product => <ProductItem key={product.id}
    productItem={product} />);

    // <div id = ${productId}-star-placeholder></div>

    return (
      <div>
        <Carousel title="People also bought">
          {productItem}
        </Carousel>
        <label htmlFor="test">Test Data Retrieval: </label>
        <input type="text" />
        <button type="submit">Get products</button>
      </div>
    );
  };
};

export default App;
