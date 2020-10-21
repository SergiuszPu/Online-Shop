import React from 'react'
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Logo.scss';

const Logo = (props) => {

  const { toggleMenu } = props;

  return (
    <div className="Logo">
      <Link className="logo" to="/">
        <h1>Online-Shop</h1>
      </Link>
      <FontAwesomeIcon icon={faBars} className="burger" onClick={toggleMenu} />
    </div>
  )
};

Logo.propTypes = {
  toggleMenu: PropTypes.func,
}
export default Logo;