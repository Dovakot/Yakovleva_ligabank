import React from 'react';
import PropTypes from 'prop-types';

import FormSelect from '../form-select/form-select';

const InputConfig = {
  MAX_AMOUNT: 100000000,
  MAX_STEP: 0.0001,
};

function FormInput({amount, type, label, onRateChange, onCurrencyChange}) {
  const nameInput = `amount-${type}`;

  return (
    <fieldset className="currency-converter__fieldset">
      <legend className="visually-hidden">Данные для конвертации</legend>

      <label className="form-input form-input--amount">
        <span className="form-input__label">
          {label}
        </span>

        <input
          className="form-input__field"
          type="number"
          name={nameInput}
          value={amount}
          placeholder={0}
          min={0}
          max={InputConfig.MAX_AMOUNT}
          step={InputConfig.MAX_STEP}
          onChange={onRateChange}
          required
        />
      </label>

      <FormSelect
        type={type}
        onCurrencyChange={onCurrencyChange}
      />
    </fieldset>
  );
}

FormInput.propTypes = {
  amount: PropTypes.any,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onRateChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
};

export default FormInput;
