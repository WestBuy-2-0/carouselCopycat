import React from 'react';
import styled from 'styled-components';

import ClickedButton from './ClickedButton.jsx';

const Button = styled(ClickedButton)`
  background: rgb(255, 215, 0);
  color: rgb(4, 12, 19);
  cursor: pointer;
  font-size: 0.93rem;

  ${Button}:hover,
  ${Button}:focus {
    background: rgb(255, 242, 0);
  }

  ${Button}:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  ${Button}:active {
    transform: scale(0.99);
  }
`;

const Image = styled.img`
  height: 25px;
  float: left;
  padding-right: 10px;
`;

class CartButton extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: true
    };
    this.addToCart = this.addToCart.bind(this);
  };

  addToCart() {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {

    if (this.state.clicked) {
      return (
        <Button clicked={this.state.clicked} onClick={this.addToCart}>
          <Image src='./wagon.svg'></Image>
          Add to Wagon
        </Button>
      );
    } else {
      return (
        <ClickedButton>
          Added to Wagon
        </ClickedButton>
      );
    }
  }
};

export default CartButton;

// "http://westbuy.org/83ae4d43b337609ef65721484d59e50e.svg"
