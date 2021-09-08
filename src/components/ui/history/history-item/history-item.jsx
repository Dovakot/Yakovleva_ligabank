import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../../svg-icon/svg-icon';
import {IconType} from '../../../../const';
import {getDate} from '../../../../utils';

function HistoryItem({date, from, to}) {
  const formattedDate = getDate(date, 'DD.MM.YYYY');

  return (
    <tr>
      <td>
        {formattedDate}
      </td>
      <td>
        {from.amount} {from.currency}
      </td>
      <td>
        <SvgIcon icon={IconType.ARROW_RIGHT} />
      </td>
      <td>
        {to.amount} {to.currency}
      </td>
    </tr>
  );
}

HistoryItem.propTypes = {
  date: PropTypes.object.isRequired,
  from: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
  to: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default HistoryItem;
