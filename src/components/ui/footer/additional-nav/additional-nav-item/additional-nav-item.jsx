import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function AdditionalNavItem({name, currentLink}) {
  return (
    <li className="additional-nav__item">
      <Link
        className="additional-nav__link"
        to={currentLink}
      >
        {name}
      </Link>
    </li>
  );
}

AdditionalNavItem.propTypes = {
  name: PropTypes.string.isRequired,
  currentLink: PropTypes.string.isRequired,
};

export default AdditionalNavItem;
