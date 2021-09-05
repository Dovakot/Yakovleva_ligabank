import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

function NavItem({name, currentLink}) {
  return (
    <li className="nav__item">
      <NavLink
        className="nav__link"
        activeClassName="nav__link--active"
        to={currentLink}
        exact
      >
        {name}
      </NavLink>
    </li>
  );
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  currentLink: PropTypes.string.isRequired,
};

export default NavItem;
