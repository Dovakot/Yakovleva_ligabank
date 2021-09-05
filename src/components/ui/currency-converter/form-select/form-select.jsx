import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../../svg-icon/svg-icon';
import {IconType} from '../../../../const';

import SelectItem from './select-item/select-item';

const CURRENCY_LIST = ['RUB', 'USD', 'EUR', 'GBP', 'CNY'];

const getSelectItem = (currency) => (
  <SelectItem
    key={currency}
    currency={currency}
  />
);

function FormSelect({name}) {
  return (
    <label className="form-input form-input--select">
      <span className="visually-hidden">Валюта</span>

      <select
        className="form-input__field"
        name={name}
      >
        {CURRENCY_LIST.map(getSelectItem)}
      </select>

      <SvgIcon
        className="form-input__icon"
        icon={IconType.ARROW_DOWN}
      />
    </label>
  );
}

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormSelect;
