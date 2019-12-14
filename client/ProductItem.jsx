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
  width: 80%;
  color: blue;
  font-family: Human BBY Web, Arial, Helvetica, sans-serif;
  font-size: 13px;
  max-height: 48px;
  height: 35px;

  ${Name}:hover {
    color: hot pink;
    text-decoration: default;
  }
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

const Clickable = styled.span`
  text-decoration: none;
  color: blue;

  ${Clickable}:hover,
  ${Clickable}:focus {
    color: rgb(255, 242, 0);
    text-decoration: default;
  }
`;

const AlsoBoughtItem = props => {

  let starsId = props.alsoBoughtItem.id;

  if (props.alsoBoughtItem.stock === 0) {
    return (
      <React.Fragment>
        <a href={`/${props.alsoBoughtItem.id}`}>
          <Image src={props.alsoBoughtItem.image}></Image>
        </a>
        <Name>
          <Clickable><a href={`/${props.alsoBoughtItem.id}`}>
            {props.alsoBoughtItem.name}
          </a></Clickable>
        </Name>
        <div className="stars-carousel" id={starsId}></div>
        <Price>{props.alsoBoughtItem.price}</Price>
        <ClickedButton>Sold Out</ClickedButton>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <a href={`/${props.alsoBoughtItem.id}`}>
          <Image src={props.alsoBoughtItem.image}></Image>
        </a>
        <Name>
          <Clickable><a href={`/${props.alsoBoughtItem.id}`}>
            {props.alsoBoughtItem.name}
          </a></Clickable>
        </Name>
        <div className="stars-carousel" id={starsId}></div>
        <Price>{props.alsoBoughtItem.price}</Price>
        <CartButton></CartButton>
      </React.Fragment>
    );
  }
};

export default AlsoBoughtItem;

// <a
//   href={`/${props.alsoBoughtItem.id}`}
//   style={{
//     "text-decoration": "none",
//     "color": "blue"
//
//   }}
// >
