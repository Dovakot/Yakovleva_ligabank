import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import HistoryItem from '../history-item/history-item';

const getHistoryItem = (item, id) => (
  <HistoryItem
    key={`${item.from.currency}${id}`}
    {...item}
  />
);

function HistoryCol({items, isModifier}) {
  const tableClass = cn('conversion-history__table', {
    'conversion-history__table--right': isModifier,
  });

  return (
    <div className="conversion-history__wrapper">
      <table className={tableClass}>
        <tbody>
          {items.map(getHistoryItem)}
        </tbody>
      </table>
    </div>
  );
}

HistoryCol.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.object.isRequired,
      from: PropTypes.object.isRequired,
      to: PropTypes.object.isRequired,
    }),
  ).isRequired,
  isModifier: PropTypes.bool,
};

export default HistoryCol;
