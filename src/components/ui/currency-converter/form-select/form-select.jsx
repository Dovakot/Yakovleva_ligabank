import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import SvgIcon from '../../svg-icon/svg-icon';
import {IconType} from '../../../../const';
import {getRateData} from '../../../../store/reducers/converter-data/selectors';
import {setLoadState} from '../../../../store/actions/converter-actions/converter-actions';

import SelectItem from './select-item/select-item';

const CURRENCY_LIST = ['RUB', 'USD', 'EUR', 'GBP', 'CNY'];

function FormSelect({type, onCurrencyChange}) {
  const dispatch = useDispatch();
  const {currencyDisabled, currency} = useSelector(getRateData)[type];

  const nameSelect = `currency-${type}`;

  const getSelectItem = (item) => (
    <SelectItem
      key={item}
      currency={item}
      currencyDisabled={currencyDisabled}
    />
  );

  const handleCurrencyChange = ({target}) => {
    dispatch(setLoadState(true));
    onCurrencyChange(target.value);
  };

  return (
    <label className="form-input form-input--select">
      <span className="visually-hidden">Валюта</span>

      <select
        className="form-input__field"
        name={nameSelect}
        value={currency}
        onChange={handleCurrencyChange}
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
  type: PropTypes.string.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
};

export default FormSelect;
