import React from 'react';
import {useLocation} from 'react-router-dom';

import {NAV_LIST, AppRoute} from '../../../../const';

import AdditionalNavItem from './additional-nav-item/additional-nav-item';

function AdditionalNav() {
  const {pathname} = useLocation();

  const getNavItem = ({id, name}) => {
    const currentPath = AppRoute[id];

    return pathname !== currentPath ? (
      <AdditionalNavItem
        key={id}
        name={name}
        currentLink={currentPath}
      />
    ) : '';
  };

  return (
    <ul className="additional-nav page-footer__nav">
      {NAV_LIST.map(getNavItem)}
    </ul>
  );
}

export default AdditionalNav;
