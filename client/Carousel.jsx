import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CarouselContainer from './CarouselContainer.jsx';
import CarouselSlot from './CarouselSlot.jsx';
import Wrapper from './Wrapper.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import CartButton from './CartButton.jsx';

// TO DO:  Add all styled components to a HelperComponents.jsx file
const Title = styled.h2`
  box-sizing: border-box;
  color: rgb(4, 12, 19);
  float: left;
  font-family: Human BBY Web, Arial, Helvetica, sans-serif;
  font-size: 20px;
  line-height: normal;
  margin: 0;
  min-height: 54px;
  padding: 15px 0;
  width: 83.33%;
`;

const HeaderPageTracker = styled.div`
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

const Border = styled.div`
  border-color: rgb(197, 203, 213);
  border-style: solid;
  border-width: 0 0 1px;
  margin: 0 0 20px 0;
`;

class Carousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      sliding: false,
      direction: 'next'
    };
    this.getOrder = this.getOrder.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.doSliding = this.doSliding.bind(this);
  };

  /* Takes the DOM index of an item (its initial position on the page) and returns
  the place it should appear in. */
  getOrder(itemIndex) {
    const {position} = this.state;
    const {children} = this.props;
    const numItems = children.length || 1;

    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }

    return itemIndex - position;
  };

  doSliding(direction, position) {
    this.setState({
      sliding: true,
      direction,
      position
    });

    setTimeout(() => {
      this.setState({
        sliding: false
      });
    }, 50);
  };

  // Increment to the next slide.
  nextSlide() {
    const {position} = this.state;
    const {children} = this.props;
    const numItems = children.length || 1;

    this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
  };

  // Go to the previous slide.
  prevSlide() {
    const {position} = this.state;
    const {children} = this.props;
    const numItems = children.length;

    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
  };

  render() {
    const {title, children} = this.props;
    const {sliding, direction, position} = this.state;

    return (
      <div>
        <Title>{title}</Title>

        {/* TO DO: Make HeaderPageTracker dynamic based on number of items retrieved. */}
        <HeaderPageTracker>Page <b>1</b> of <b>2</b></HeaderPageTracker>

        <Wrapper>
          <Border></Border>
          <CarouselContainer sliding={sliding} direction={direction}>
            {children.map((child, index) => (
              <CarouselSlot key={index} order={this.getOrder(index)}>
                {child}
                <CartButton />
              </CarouselSlot>
            ))}
          </CarouselContainer>
        </Wrapper>

        {/* Temporary buttons to test functionality. */}
        <LeftArrow></LeftArrow>
        <button onClick = {this.prevSlide}>Previous</button>
        <RightArrow></RightArrow>
        <button onClick={this.nextSlide}>Next</button>

      </div>
    );
  };
};

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Carousel;
