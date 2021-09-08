import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';
import {toast} from 'react-toastify';

import SvgIcon from '../svg-icon/svg-icon';
import {IconType} from '../../../const';
import {filterHistory} from '../../../utils';
import fetchCurrencyRate from '../../../store/api-actions/api-actions';
import {getHistory} from '../../../store/reducers/history-data/selectors';
import {saveHistory} from '../../../store/actions/history-actions/history-actions';
import {
  getRateData,
  getCurrentDate,
  getLoadState,
  getFieldState
} from '../../../store/reducers/converter-data/selectors';
import {
  changeCurrencyFrom,
  changeCurrencyTo,
  convertRateFrom,
  convertRateTo,
  checkFieldState
} from '../../../store/actions/converter-actions/converter-actions';

import Button from '../button/button';
import FormInput from './form-input/form-input';
import FormCalendar from './form-calendar/form-calendar';

function CurrencyConverter() {
  const dispatch = useDispatch();

  const date = useSelector(getCurrentDate);
  const historyData = useSelector(getHistory);
  const isLoading = useSelector(getLoadState);
  const isValid = useSelector(getFieldState);
  const {from, to} = useSelector(getRateData);

  const formClass = cn('currency-converter__form', {
    'currency-converter__form--load': isLoading,
  });

  useEffect(() => {
    dispatch(fetchCurrencyRate(date, from.currency, to.currency));

    return () => {};
  }, [dispatch, date, from.currency, to.currency]);

  const handleFormChange = ({currentTarget}) => {
    const isValidFrom = currentTarget['amount-from'].checkValidity();
    const isValidTo = currentTarget['amount-to'].checkValidity();

    dispatch(checkFieldState(isValidFrom && isValidTo));
  };

  const handleRateFromChange = ({target}) => dispatch(convertRateFrom(target.value));
  const handleRateToChange = ({target}) => dispatch(convertRateTo(target.value));

  const handleCurrencyFromChange = (currency) => {
    dispatch(changeCurrencyFrom(currency));
    dispatch(fetchCurrencyRate(date, currency, to.currency));
  };

  const handleCurrencyToChange = (currency) => {
    dispatch(changeCurrencyTo(currency));
    dispatch(fetchCurrencyRate(date, from.currency, currency));
  };

  const handleButtonClick = (evt) => {
    const filteredCount = filterHistory(historyData, date, from, to).length;

    if (!isValid) {
      toast.error('Пожалуйста, проверьте введённые данные и попытайтесь снова');

      return;
    }

    if (filteredCount) {
      toast.info('Данные уже были добавлены');

      return;
    }

    dispatch(saveHistory({date, from, to}, historyData.length));
  };

  return (
    <section className="container currency-converter page-main__currency-converter">
      <h2 className="title currency-converter__title">Конвертер валют</h2>

      <form
        className={formClass}
        onChange={handleFormChange}
        action="#"
      >
        <FormInput
          nameInput="amount-available"
          nameSelect="available-currency"
          label="У меня есть"
          amount={from.amount}
          type="from"
          currencyDefault={from.currency}
          onRateChange={handleRateFromChange}
          onCurrencyChange={handleCurrencyFromChange}
        />
        <SvgIcon
          className="currency-converter__icon"
          icon={IconType.ARROWS}
        />
        <FormInput
          nameInput="purchase-amount"
          nameSelect="purchase-currency"
          label="Хочу приобрести"
          amount={to.amount}
          type="to"
          currencyDefault={to.currency}
          onRateChange={handleRateToChange}
          onCurrencyChange={handleCurrencyToChange}
        />
        <FormCalendar />

        <div className="currency-converter__wrapper">
          <Button
            text="Сохранить результат"
            className="currency-converter__button"
            onButtonClick={handleButtonClick}
          />
        </div>
      </form>
    </section>
  );
}

export default CurrencyConverter;
