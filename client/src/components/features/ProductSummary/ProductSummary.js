import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductSummary.scss';

const ProductSummary = ({ id, price, name, img }) => (

  <div className="product-summary">
    <Link to={'product/' + id}>
      <h1>{name}</h1>
      <p>{price}</p>
      <img src={img} alt={img}/>
    </Link>
  </div>
);

ProductSummary.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  img:PropTypes.object,
};

export default ProductSummary; 