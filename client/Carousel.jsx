import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CarouselContainer from './CarouselContainer.jsx';
import CarouselSlot from './CarouselSlot.jsx';
import Wrapper from './Wrapper.jsx';

const Title = styled.h2`
  font-family: Arial, sans-serif
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

        <Wrapper>
          <CarouselContainer sliding={sliding} direction={direction}>
            {children.map((child, index) => (
              <CarouselSlot key={index} order={this.getOrder(index)}>
                {child}
              </CarouselSlot>
            ))}
          </CarouselContainer>
        </Wrapper>

        {/* Temporary buttons to test functionality. */}
        <button onClick = {this.prevSlide}>Previous</button>
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
