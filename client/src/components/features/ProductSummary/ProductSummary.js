import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductSummary.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Card, Badge, CardImg, CardSubtitle, CardBody, CardTitle } from 'reactstrap';

export class ProductSummary extends React.Component {
  render() {
    const { id, tag, img, name, price } = this.props;
    return (
      <Col className="product-summary" xs={6}>
        <Link to={`/product/${id}`}>
          <Card>
            {tag ? <Badge color="info">{tag}</Badge> : <span className="non-badge"></span>}
            <CardImg src={img} />
            <CardBody>
              <CardTitle>{name}</CardTitle>
              <CardSubtitle>{price}</CardSubtitle>
            </CardBody>
          </Card>
        </Link>
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