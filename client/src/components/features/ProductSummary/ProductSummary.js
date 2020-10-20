import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductSummary.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Card, Badge, CardImg, CardSubtitle, CardBody, CardTitle, CardLink } from 'reactstrap';

export class ProductSummary extends React.Component {
  render() {
    const { tag, img, name, price } = this.props;
    return (
      <Col className="product-summary" xs={6}>
        <Card>
        <Badge className="product-tag">{tag}</Badge>
          <CardImg src={img} />
          <CardBody>
            <CardTitle  className="item-name">{name}</CardTitle>
            <CardSubtitle>{price}</CardSubtitle>
            <CardLink href={'/product'} />
          </CardBody>
        </Card>
      </Col>
    );
  }
};

ProductSummary.propTypes = {
  id: PropTypes.string,
  tag: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.object,
};

export default ProductSummary; 