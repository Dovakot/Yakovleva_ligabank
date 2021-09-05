import React from 'react';

import BasePage from '../../base-page/base-page';
import Promo from '../../ui/promo/promo';
import CurrencyConverter from '../../ui/currency-converter/currency-converter';
import History from '../../ui/history/history';

function Main() {
  return (
    <BasePage>
      <Promo />
      <CurrencyConverter />
      <History />
    </BasePage>
  );
}

export default Main;
