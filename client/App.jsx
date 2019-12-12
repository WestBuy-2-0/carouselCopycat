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
      items: ProductData,
      products: []
    };
    // this.handleSearch = this.handleSearch.bind(this);
  };

  // handleSearch(id) {
  //   let productId = this.state.items.id;
  //   this.setState({
  //     if (id === productId) {
  //       return {
  //         products:
  //       }
  //     }
  //   });
  // };

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
        <button type="submit" onClick={this.handleSearch}>Get products</button>
      </div>
    );
  };
};

export default App;
