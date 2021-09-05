import React from 'react';

import SvgIcon from '../svg-icon/svg-icon';
import {IconType} from '../../../const';

import Button from '../button/button';
import FormInput from './form-input/form-input';
import FormCalendar from './form-calendar/form-calendar';

function CurrencyConverter() {
  return (
    <section className="container currency-converter page-main__currency-converter">
      <h2 className="title currency-converter__title">Конвертер валют</h2>

      <form className="currency-converter__form" action="#">
        <FormInput
          nameInput="amount-available"
          nameSelect="available-currency"
          label="У меня есть"
        />
        <SvgIcon
          className="currency-converter__icon"
          icon={IconType.ARROWS}
        />
        <FormInput
          nameInput="purchase-amount"
          nameSelect="purchase-currency"
          label="Хочу приобрести"
        />
        <FormCalendar defaultValue="1.12.2020" />

        <div className="currency-converter__wrapper">
          <Button
            text="Сохранить результат"
            className="currency-converter__button"
          />
        </div>
      </form>
    </section>
  );
}

export default CurrencyConverter;
