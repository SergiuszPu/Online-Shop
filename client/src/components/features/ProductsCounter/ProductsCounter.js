import React from 'react';

class ProductsCounter extends React.Component {

  render() {
    const { counter } = this.props;

    return (
      <div>
        <div className="counter">Products available: {counter > 0 ? counter : ' 0 '}</div>
      </div>
    );
  }

};

export default ProductsCounter; 