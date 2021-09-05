import React from 'react';
import PropTypes from 'prop-types';

import BaseSection from '../../ui/base-section/base-section';

function ContentWrapper({children, title}) {
  return (
    <main className="page-main">
      <h1 className="visually-hidden">Интернет-банк: Лига Банк</h1>

      {children || <BaseSection title={title} />}
    </main>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
};

export default ContentWrapper;
