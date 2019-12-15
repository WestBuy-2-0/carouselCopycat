// Base carousel structure
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Carousel from './Carousel.jsx';
import AlsoBoughtItem from './AlsoBoughtItem.jsx';
import MostViewedItem from './MostViewedItem.jsx';

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
      alsoBoughtItems: [],
      mostViewedItems: [],
      currentPage: 1,
      totalPages: 2
    };
    this.getAlsoBoughtProducts = this.getAlsoBoughtProducts.bind(this);
    this.getMostViewedProducts = this.getMostViewedProducts.bind(this);
    this.handleCurrentPage = this.handleCurrentPage.bind(this);
  };

  componentDidMount() {
    this.getAlsoBoughtProducts();
    this.getMostViewedProducts();
  };

  getAlsoBoughtProducts() {
    axios.get('http://westbuycarousel-env.8mbhtr3m3h.us-east-2.elasticbeanstalk.com/products')
    .then(response => {
      this.setState({
        alsoBoughtItems: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
  };

  getMostViewedProducts() {
    axios.get('http://westbuycarousel-env.8mbhtr3m3h.us-east-2.elasticbeanstalk.com/products')
    .then(response => {
      this.setState({
        mostViewedItems: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
  };

  // Function to increment/decrement this.state.currentPage
  handleCurrentPage(direction) {
    if (direction === "left") {
      this.setState({
        currentPage: 1
      });
    } else if (direction === "right") {
      this.setState({
        currentPage: 2
      });
    };
  };

  render() {

    let alsoBoughtItem = this.state.alsoBoughtItems.map(product => <AlsoBoughtItem key={product.id}
    alsoBoughtItem={product} />);

    let mostViewedItem = this.state.mostViewedItems.map(product => <MostViewedItem key={product.id}
    mostViewedItem={product} />);

    return (
      <div>
        <Carousel
          title="People also bought"
          handleCurrentPage={this.handleCurrentPage}
          currentPage={this.state.currentPage}
          totalPages={this.state.totalPages}
        >
          {alsoBoughtItem}
        </Carousel>
        <Carousel
          title="Most-viewed products"
          handleCurrenPage={this.handleCurrentPage}
          currentPage={this.state.currentPage}
          totalPages={this.state.totalPages}
        >
          {mostViewedItem}
        </Carousel>
      </div>
    );
  };
};

export default App;
