import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-bg" style={{ backgroundImage: 'url(https://via.placeholder.com/800x400)' }}>
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Sample Text for the first slide.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-bg" style={{ backgroundImage: 'url(https://via.placeholder.com/800x400)' }}>
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Sample Text for the second slide.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-bg" style={{ backgroundImage: 'url(https://via.placeholder.com/800x400)' }}>
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>Sample Text for the third slide.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
