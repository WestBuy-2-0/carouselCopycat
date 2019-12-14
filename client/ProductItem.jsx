import React from 'react';
import styled from 'styled-components';

import CartButton from './CartButton.jsx';
import ClickedButton from './ClickedButton.jsx';

const Image = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin: auto;
  object-fit: scale-down;
`;

const Name = styled.p`
  box-sizing: border-box;
  color: rgb(0, 30, 115);
  font-family: Human BBY Web, Arial, Helvetica, sans-serif;
  font-size: 13px;
  max-height: 48px;
  height: 35px;
`;

const Price = styled.p`
  box-sizing: border-box;
  color: rgb(29, 37, 44);
  font-family: Human BBY Web, Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-stretch: 100%;
  font-weight: bold;
  line-height: 18px;
  height: 35px;
`;

const AlsoBoughtItem = props => {
  if (props.alsoBoughtItem.stock === 0) {
    return (
      <React.Fragment>
        <Image src={props.alsoBoughtItem.image}></Image>
        <Name><a href={`/${props.alsoBoughtItem.id}`}>{props.alsoBoughtItem.name}</a></Name>
        <div id="star-placeholder">STAR PLACEHOLDER</div>
        <Price>{props.alsoBoughtItem.price}</Price>
        <ClickedButton>Sold Out</ClickedButton>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Image src={props.alsoBoughtItem.image}></Image>
        <Name><a href={`/${props.alsoBoughtItem.id}`}>{props.alsoBoughtItem.name}</a></Name>
        <div id="star-placeholder">STAR PLACEHOLDER</div>
        <Price>{props.alsoBoughtItem.price}</Price>
        <CartButton></CartButton>
      </React.Fragment>
    );
  }
};

export default AlsoBoughtItem;
