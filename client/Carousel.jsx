import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CarouselContainer from './CarouselContainer.jsx';
import CarouselSlot from './CarouselSlot.jsx';
import Wrapper from './Wrapper.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import CartButton from './CartButton.jsx';
import Counter from './Counter.jsx';
import Sizing from './Sizing.jsx';

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

const Border = styled.div`
  border-color: rgb(197, 203, 213);
  border-style: solid;
  border-width: 0 0 1px;
  margin: 0 0 20px 0;
  grid-area: b;
`;

class Carousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      sliding: false,
      direction: 'next',
      currentPage: 1,
      totalPages: 2
    };

    this.getOrder = this.getOrder.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.doSliding = this.doSliding.bind(this);
    this.handleCurrentPage = this.handleCurrentPage.bind(this);
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

    this.doSliding('next', position === numItems - 1 ? 0 : position + 5);
  };

  // Go to the previous slide.
  prevSlide() {
    const {position} = this.state;
    const {children} = this.props;
    const numItems = children.length;

    this.doSliding('prev', position === 0 ? numItems - 1 : position - 5);
  };

  // Function to increment/decrement this.state.currentPage
  handleCurrentPage(direction) {
    if (direction === "left") {
      this.setState({
        currentPage: 1
      });
    } else if (direction === "right") {
      this.setState({
        currentPage: 2
      });
    };
  };

  render() {
    const {title, children} = this.props;
    const {sliding, direction, position} = this.state;

    return (
      <Sizing>
        <Title>{title}</Title>

        <Counter
          currentPage={this.state.currentPage}
          totalPages={this.state.totalPages}
        >
        </Counter>

        <Wrapper>
          <Border></Border>

          <LeftArrow
            prevSlide={this.prevSlide}
            handleCurrentPage={this.handleCurrentPage}
            currentPage={this.state.currentPage}
            totalPages={this.state.totalPages}
          >
          </LeftArrow>

            <CarouselContainer sliding={sliding} direction={direction}>
              {children.map((child, index) => (
                <CarouselSlot key={index} order={this.getOrder(index)}>
                  {child}
                </CarouselSlot>
              ))};
            </CarouselContainer>

          <RightArrow
            nextSlide={this.nextSlide}
            handleCurrentPage={this.handleCurrentPage}
            currentPage={this.state.currentPage}
            totalPages={this.state.totalPages}
          >
          </RightArrow>
        </Wrapper>
      </Sizing>
    );
  };
};

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Carousel;
