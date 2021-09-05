import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../../const';

function Promo() {
  return (
    <section className="sales-pitch page-main__sales-pitch">
      <h2 className="visually-hidden">Кредитное предложение</h2>

      <div className="sales-pitch__wrapper">
        <p className="sales-pitch__name">Лига Банк</p>
        <p className="sales-pitch__slogan">Кредиты на любой случай</p>

        <Link
          className="button button--secondary"
          to={AppRoute.CALCULATOR}
        >
          Рассчитать кредит
        </Link>
      </div>
    </section>
  );
}

export default Promo;
