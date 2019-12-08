import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  display: inline-block;
  border: none;
  padding: 0 1rem;
  border-radius: 4px;
  margin: 0;
  text-decoration: none;
  background: rgb(255, 215, 0);
  color: rgb(4, 12, 19);
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
// <img src="http://westbuy.org/83ae4d43b337609ef65721484d59e50e.svg"></img>

{/* TO DO: 1) Change button's styling when clicked; 2) Increment cart number */}

const CartButton = props => (
  <Button>
    <Image src="http://westbuy.org/83ae4d43b337609ef65721484d59e50e.svg"></Image>
    Add to Cart
  </Button>
);

export default CartButton;
