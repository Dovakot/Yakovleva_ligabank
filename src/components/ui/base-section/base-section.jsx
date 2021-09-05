import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../../const';

function BaseSection({title, isNotFound}) {
  return (
    <section className="container page-main__section">
      <h2 className="title">{title}</h2>

      <p>
        {isNotFound ?
          <>
            Сожалеем, запрошенная страница не может быть найдена.
            URL-адрес может быть написан с ошибкой или страница,
            которую вы ищете, больше не доступна. Вернуться
            на <Link to={AppRoute.ROOT}>главную страницу</Link>
          </>
          : 'Извините, данная страница находится на стадии разработки.'}
      </p>
    </section>
  );
}

BaseSection.propTypes = {
  title: PropTypes.string.isRequired,
  isNotFound: PropTypes.bool,
};

export default BaseSection;
