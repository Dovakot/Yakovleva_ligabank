import React from 'react';
import PropTypes from 'prop-types';

import FormSelect from '../form-select/form-select';

function FormInput({nameInput, nameSelect, label}) {
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
          min={0}
          step="any"
          placeholder={0}
        />
      </label>

      <FormSelect name={nameSelect} />
    </fieldset>
  );
}

FormInput.propTypes = {
  nameInput: PropTypes.string.isRequired,
  nameSelect: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormInput;
