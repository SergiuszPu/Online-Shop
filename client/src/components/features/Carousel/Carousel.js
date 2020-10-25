import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './Carousel.scss';

import Img1 from './1.jpg';
import Img2 from './2.jpg';
import Img3 from './3.jpg';

const items = [
  {
    src: Img1,
    altText: 'Slide 1',
    caption: 'onlyq in Online-Shop',
    header: 'best prices',
    key: '1'
  },
  {
    src: Img2,
    altText: 'Slide 2',
    caption: 'only in Online-Shop',
    header: 'free shipping',
    key: '2'
  },
  {
    src: Img3,
    altText: 'Slide 3',
    caption: 'only in Online-Shop',
    header: 'client satisfaction',
    key: '3'
  }
];

const TopCarousel = () => <UncontrolledCarousel className="carousel" items={items} />;

export default TopCarousel; 