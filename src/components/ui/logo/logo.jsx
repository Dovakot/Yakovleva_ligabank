import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import cn from 'classnames';

import logo from '../../../img/logo-ligabank.svg';
import {AppRoute} from '../../../const';

function Logo({isClassName}) {
  const logoClass = cn('page-logo', {
    'copyright__logo': isClassName,
  });

  return (
    <NavLink
      className={logoClass}
      activeClassName="page-logo--active"
      to={AppRoute.ROOT}
      exact
    >
      <img
        src={logo}
        alt="ЛИГА Банк"
        width={149}
        height={25}
      />
    </NavLink>
  );
}

Logo.propTypes = {
  isClassName: PropTypes.bool,
};

export default Logo;
