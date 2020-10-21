import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import './MainMenu.scss';

const MainMenu = (props) => {

  const { showMenu } = props;
  let menuClasses = "main-menu";
  if (showMenu) {
    menuClasses += " mobile-menu";
  }

  return (
    <ul className={menuClasses}>
      <li className={showMenu ? "link-mobile" : ""}>
        <NavLink exact to="/" className="navlink" activeClassName="active">
          Home
          </NavLink>
      </li>
      <li className={showMenu ? "link-mobile" : ""}>
        <NavLink exact to="/faq" className="navlink" activeClassName="active">
          Faq
          </NavLink>
      </li>
      <li className={showMenu ? "link-mobile" : ""}>
        <NavLink exact to="/storepolicy" className="navlink" activeClassName="active">
          Store Policy
          </NavLink>
      </li>
      <li className={showMenu ? "link-mobile" : ""}>
        <NavLink exact to="/contact" className="navlink" activeClassName="active">
          Contact
          </NavLink>
      </li>
    </ul>
  )
};

MainMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};

export default MainMenu; 