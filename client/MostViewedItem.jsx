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

// const Clickable = styled.span`
//   text-decoration: none;
//   color: hot pink;
//
//   ${Clickable}:hover,
//   ${Clickable}:focus {
//     color: rgb(255, 242, 0);
//     text-decoration: default;
//   }
// `;

const MostViewedItem = props => {
  let starsId = props.mostViewedItem.id;

  let productId = '/' + props.mostViewedItem.id;

  if (props.mostViewedItem.stock === 0) {
    return (
      <React.Fragment>
        <a href={productId}>
          <Image src={props.mostViewedItem.image}></Image>
        </a>
        <Name>
          <a href={productId}>
            {props.mostViewedItem.name}
          </a>
        </Name>
        <div className="stars-carousel" id={starsId}></div>
        <Price>{props.mostViewedItem.price}</Price>
        <ClickedButton>Sold Out</ClickedButton>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <a href={`/${props.mostViewedItem.id}`}>
          <Image src={props.mostViewedItem.image}></Image>
        </a>
        <Name>
          <a href={`/${props.mostViewedItem.id}`}>
            {props.mostViewedItem.name}
          </a>
        </Name>
        <div className="stars-carousel" id={starsId}></div>
        <Price>{props.mostViewedItem.price}</Price>
        <CartButton></CartButton>
      </React.Fragment>
    );
  }
};

export default MostViewedItem;
