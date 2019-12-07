import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: scale-down;
`;

const ProductItem = props => (
  <React.Fragment>
    <Image src={props.productItem.image}></Image>
    <p>{props.productItem.name}</p>
    <div>STARS PLACEHOLDER</div>
    <p>{props.productItem.price}</p>
    <div>ADD TO CART PLACEHOLDER</div>
  </React.Fragment>
);

export default ProductItem;
