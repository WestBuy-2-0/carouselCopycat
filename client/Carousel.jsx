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
      rightClicked: false,
      leftClicked: false
    };

    this.getOrder = this.getOrder.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.doSliding = this.doSliding.bind(this);
    this.rightArrowClick = this.rightArrowClick.bind(this);
    this.leftArrowClick = this.leftArrowClick.bind(this);
  };

  componentDidMount() {
    this.state.rightClicked;
    this.state.leftClicked;
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

  rightArrowClick() {
    this.setState({
      rightClicked: !this.state.rightClicked
    });
  };

  leftArrowClick() {
    this.setState({
      leftClicked: !this.state.leftClicked
    });
    console.log(this.state.leftClicked);
  };

  render() {
    const {title, children} = this.props;
    const {sliding, direction, position} = this.state;

    return (
      <div>
        <Title>{title}</Title>

        <Counter
          rightClicked={this.state.rightClicked}
          leftCicked={this.state.leftClicked}
          currentPage={this.props.currentPage}
          totalPages={this.props.totalPages}
          >
        </Counter>

        <Wrapper>
          <Border></Border>

          <LeftArrow
            prevSlide={this.prevSlide}
            rightClicked={this.state.rightClicked}
            leftArrowClick={this.leftArrowClick}

            handleCurrentPage={this.props.handleCurrentPage}
            currentPage={this.props.currentPage}
            totalPages={this.props.totalPages}>
          </LeftArrow>

            <CarouselContainer sliding={sliding} direction={direction}>
              {children.map((child, index) => (
                <CarouselSlot key={index} order={this.getOrder(index)}>
                  {child}
                  <CartButton />
                </CarouselSlot>
              ))};
            </CarouselContainer>

          <RightArrow
            nextSlide={this.nextSlide}
            leftClicked={this.state.leftClicked}
            rightArrowClick={this.rightArrowClick}

            handleCurrentPage={this.props.handleCurrentPage}
            currentPage={this.props.currentPage}
            totalPages={this.props.totalPages}

            >
          </RightArrow>
        </Wrapper>
      </div>
    );
  };
};

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Carousel;
