import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../../svg-icon/svg-icon';
import {IconType} from '../../../../const';

function FormCalendar({defaultValue}) {
  return (
    <fieldset className="currency-converter__fieldset">
      <legend className="visually-hidden">Дата конвертации</legend>

      <label className="form-input form-input--calendar">
        <span className="visually-hidden">Календарь</span>

        <input
          className="form-input__field"
          type="text"
          name="calendar"
          defaultValue={defaultValue}
          readOnly
        />

        <SvgIcon
          className="form-input__icon"
          icon={IconType.CALENDAR}
        />
      </label>
    </fieldset>
  );
}

FormCalendar.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};

export default FormCalendar;
