import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductSummary.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardImg, CardText, CardBody, CardTitle, CardLink } from 'reactstrap';

const ProductSummary = ({ price, name, img }) => (

  <div className={"product-summary"}>
    <Card>
      <CardImg src={img} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{price}</CardText>
        <CardLink href={'/product'} />
      </CardBody>
    </Card>
  </div>
);

ProductSummary.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.object,
};

export default ProductSummary; 