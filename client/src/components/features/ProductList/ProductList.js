import React from 'react';
import { PropTypes } from 'prop-types';

import ProductsSummary from '../ProductSummary/ProductSummary';

const ProductsList = ({ products }) => (

  <div className="products-list">
      {products.map(post => <ProductsSummary key={post.id} {...post} />)}   
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      // title: PropTypes.string.isRequired,
      // content: PropTypes.string.isRequired,
    })
  ),
};

export default ProductsList; 