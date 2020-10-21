import React from 'react';
import ProductsCounter from '../../features/ProductsCounter/ProductsCounterContainer';
import Products from '../../features/Products/ProductsContainer';
// import './HomePage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import TopCarousel from '../../features/Carousel/Carousel';
import ModalCode from '../../features/Modal/Modal';
import Sort from '../../features/Sort/SortContainer';

const HomePage = () => (
  <Container>
    <TopCarousel />
    <ModalCode />
    <Row>
      <Col xs={4}>
        <Sort />
        <ProductsCounter />
      </Col>
      <Col xs={8}>
        <Products />
      </Col>
    </Row>
  </Container>
);

export default HomePage; 