import React from 'react';
import styled from 'styled-components';

const PageTracker = styled.div`
  box-sizing: border-box;
  color: rgb(4, 12, 19);
  float: right;
  font-family: Human BBY Web, Arial, Helvetica, sans-serif;
  font-size: 13px;
  line-height: normal;
  margin: 24px 0 0 0;
  text-align: right;
  width: 16.67%;
`;

// Works successfully with right arrow
const Counter = (props) => {
  if (!props.rightClicked) {
    return (<PageTracker>Page <b>1</b> of <b>2</b></PageTracker>);
  } else {
    return (<PageTracker>Page <b>2</b> of <b>2</b></PageTracker>)
  }

  if (props.leftClicked) {
    return (<PageTracker>Page <b>1</b> of <b>2</b></PageTracker>);
  } else {
    console.log("TEST");
  }
};



export default Counter;
