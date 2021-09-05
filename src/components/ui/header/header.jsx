import React from 'react';

import Logo from '../logo/logo';
import Nav from './nav/nav';

function Header() {
  return (
    <header className="page-header">
      <div className="container page-header__container">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
