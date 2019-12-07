import React from 'react';
import styled from 'styled-components';

import CartButton from './CartButton.jsx';

const Image = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin: auto;
  object-fit: scale-down;
`;

const Text = styled.p`
  font-family: Human BBY Web, Arial, Helvetica, sans-serif;
  color: rgb(4, 12, 19);
`;

const ProductItem = props => (
  <React.Fragment>
    <Image src={props.productItem.image}></Image>
    <Text>{props.productItem.name}</Text>
    <div>STARS PLACEHOLDER</div>
    <Text><strong>{props.productItem.price}</strong></Text>
  </React.Fragment>
);

export default ProductItem;
