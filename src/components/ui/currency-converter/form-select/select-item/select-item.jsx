import React from 'react';
import PropTypes from 'prop-types';

function SelectItem({currency, currencyDisabled}) {
  const isDisabled = currency === currencyDisabled;

  return (
    <option
      value={currency}
      disabled={isDisabled}
    >
      {currency}
    </option>
  );
}

SelectItem.propTypes = {
  currency: PropTypes.string.isRequired,
  currencyDisabled: PropTypes.string.isRequired,
};

export default SelectItem;
