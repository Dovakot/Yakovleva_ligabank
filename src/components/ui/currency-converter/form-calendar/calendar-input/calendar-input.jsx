import React, {forwardRef} from 'react';

const calendarInput = ({value, onClick}, ref) => (
  <>
    <label className="visually-hidden" htmlFor="calendar">Выберите дату</label>
    <input
      className="form-input__field"
      id="calendar"
      type="text"
      value={value}
      onClick={onClick}
      ref={ref}
      readOnly
    />
  </>
);

export default forwardRef(calendarInput);
