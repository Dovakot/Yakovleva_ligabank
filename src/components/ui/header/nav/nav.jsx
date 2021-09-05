import React from 'react';
import {NavLink} from 'react-router-dom';

import SvgIcon from '../../svg-icon/svg-icon';
import {NAV_LIST, AppRoute, IconType} from '../../../../const';

import NavItem from './nav-item/nav-item';

const getNavItem = ({id, name}) => (
  <NavItem
    key={id}
    name={name}
    currentLink={AppRoute[id]}
  />
);

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {NAV_LIST.map(getNavItem)}
      </ul>

      <ul className="nav__list nav__list--user">
        <li className="nav__item">
          <NavLink
            className="link-icon nav__link"
            activeClassName="nav__link--active"
            to={AppRoute.LOGIN}
            exact
          >
            <SvgIcon icon={IconType.LOGIN} />
            Войти в Интернет-банк
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
