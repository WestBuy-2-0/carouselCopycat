import React from 'react';
import PropTypes from 'prop-types';

import CarouselContainer from './CarouselContainer.jsx';
import CarouselSlot from './CarouselSlot.jsx';
import Wrapper from './Wrapper.jsx';

class Carousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    };
    this.getOrder = this.getOrder.bind(this);
  };

  getOrder(itemIndex) {
    const {position} = this.state;
    const {children} = this.props;
    const numItems = children.length || 1;

    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }

    return itemIndex - position;
  };

  render() {
    const {title, children} = this.props;

    return (
      <div>
        <h2>{title}</h2>

        <Wrapper>
          <CarouselContainer>
            {children.map((child, index) => (
              <CarouselSlot key={index} order={this.getOrder(index)}>
                {child}
              </CarouselSlot>
            ))}
          </CarouselContainer>
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
