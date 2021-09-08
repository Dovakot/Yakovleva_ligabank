import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DatePicker, {registerLocale} from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';

import SvgIcon from '../../svg-icon/svg-icon';
import {IconType} from '../../../../const';
import {isCurrentDate, getSubDays} from '../../../../utils';
import fetchCurrencyRate from '../../../../store/api-actions/api-actions';
import {getCurrentDate, getRateData} from '../../../../store/reducers/converter-data/selectors';
import {changeDate, setLoadState} from '../../../../store/actions/converter-actions/converter-actions';

import CalendarInput from './calendar-input/calendar-input';

registerLocale('ru', ru);

function FormCalendar() {
  const dispatch = useDispatch();
  const currentDate = useSelector(getCurrentDate);
  const {from, to} = useSelector(getRateData);

  const minDate = getSubDays();
  const maxDate = new Date();

  const handleDatePickerChange = (date) => {
    if (isCurrentDate(date, currentDate)) {
      return;
    }

    dispatch(changeDate(date));
    dispatch(setLoadState(true));
    dispatch(fetchCurrencyRate(date, from.currency, to.currency));
  };

  return (
    <fieldset className="currency-converter__fieldset">
      <legend className="visually-hidden">Дата конвертации</legend>

      <div className="form-input form-input--calendar">
        <DatePicker
          selected={currentDate}
          minDate={minDate}
          maxDate={maxDate}
          customInput={<CalendarInput />}
          dateFormat="d.MM.yyyy"
          locale="ru"
          onChange={handleDatePickerChange}
        />

        <SvgIcon
          className="form-input__icon"
          icon={IconType.CALENDAR}
        />
      </div>
    </fieldset>
  );
}

export default FormCalendar;
