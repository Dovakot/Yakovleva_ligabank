import React from 'react';

import Logo from '../logo/logo';
import AdditionalNav from './additional-nav/additional-nav';
import Contacts from './contacts/contacts';
import Social from './social/social';

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container page-footer__container">
        <div className="copyright">
          <Logo isClassName />

          <p className="copyright__text">
            150015, г. Москва, ул. Московская, д. 32<br />
            Генеральная лицензия Банка России №1050<br />
            Ⓒ Лига Банк, 2019
          </p>
        </div>

        <AdditionalNav />
        <Contacts />
        <Social />
      </div>
    </footer>
  );
}

export default Footer;
