import React from 'react';
import PropTypes from 'prop-types';

function SelectItem({currency}) {
  return (
    <option value={currency}>
      {currency}
    </option>
  );
}

SelectItem.propTypes = {
  currency: PropTypes.string.isRequired,
};

export default SelectItem;
