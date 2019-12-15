// Base carousel structure
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Carousel from './Carousel.jsx';
import AlsoBoughtItem from './AlsoBoughtItem.jsx';
import MostViewedItem from './MostViewedItem.jsx';
import Sizing from './Sizing.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      alsoBoughtItems: [],
      mostViewedItems: []
    };
    this.getAlsoBoughtProducts = this.getAlsoBoughtProducts.bind(this);
    this.getMostViewedProducts = this.getMostViewedProducts.bind(this);
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

  render() {

    let alsoBoughtItem = this.state.alsoBoughtItems.map(product => <AlsoBoughtItem key={product.id}
    alsoBoughtItem={product} />);

    let mostViewedItem = this.state.mostViewedItems.map(product => <MostViewedItem key={product.id}
    mostViewedItem={product} />);

    return (
      <Sizing>
        <Carousel title="People also bought">
          {alsoBoughtItem}
        </Carousel>
        <Carousel title="Most-viewed products">
          {mostViewedItem}
        </Carousel>
      </Sizing>
    );
  };
};

export default App;
