import React from 'react';

const ProductItem = props => (
  <React.Fragment>
    <img src={props.productItem.image}></img>
    <p>{props.productItem.name}</p>
    <div>STARS PLACEHOLDER</div>
    <p>{props.productItem.price}</p>
    <div>ADD TO CART PLACEHOLDER</div>
  </React.Fragment>
);

export default ProductItem;
 
