import React from 'react';
import styled from 'styled-components';

const ClickedButton = styled.button`
  background: rgb(197, 203, 213);
  color: rgb(85, 85, 90);
  box-sizing: border-box;
  display: inline-block;
  border: none;
  padding: 0 1rem;
  border-radius: 4px;
  margin: 0;
  text-decoration: none;
  font-family: Human BBY Web, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  height: 2.5rem;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  transition: background 250ms ease-in-out,
              transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

`;

const Button = styled(ClickedButton)`
  background: rgb(255, 215, 0);
  color: rgb(4, 12, 19);
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
  width: 1.5rem;
  height: 1.5rem;
  float: left;
  padding: 0 1rem 0 0;
  object-fit: scale-down;
  filter: invert(85%);
`;

{/* TO DO: 1) Change button's styling when clicked; 2) Increment cart number */}

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

    {/* SOLD OUT BUTTON
      if(INVENTORY === 0) {
        return (
        <ClickedButton>Sold Out</ClickedButton>
      );
    }
    */}

    if (this.state.clicked) {
      return (
        <Button clicked={this.state.clicked} onClick={this.addToCart}>
          <Image src="http://westbuy.org/83ae4d43b337609ef65721484d59e50e.svg"></Image>
          Add to Wagon
        </Button>
      );
    } else {
      return (
        <ClickedButton clicked={this.state.clicked} onClick={this.addToCart} >
          Added to Wagon
        </ClickedButton>
      );
    }
  }
};

export default CartButton;
