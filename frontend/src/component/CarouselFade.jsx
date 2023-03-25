import Carousel from 'react-bootstrap/Carousel';
import r1 from '../component/gr1.png';
import gr2 from '../component/gr2.png';
import gr3 from '../component/gr3.png';
import React, { Component }  from 'react';

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          src={r1} style={{ width: 1280, height: 720 }}
        />
        <Carousel.Caption>
          <h3>Limited Grimore NFT Collection</h3>
          <p>Earn Access to private games</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={gr2} style={{ width: 1280, height: 720 }}
        />

        <Carousel.Caption>
          <h3>Extra Rewards</h3>
          <p>holding grimore grants you extra rewards</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={gr3} style={{ width: 1280, height: 720 }}
        />

        <Carousel.Caption>
          <h3>Discount for in game purchases</h3>
          <p>
            holding a grimore grants you Discount on in game items
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;