import {createReducer} from '@reduxjs/toolkit';
import {getConvertibleCurrency} from '../../../utils';

import {
  changeCurrencyFrom,
  changeCurrencyTo,
  changeDate,
  convertRateFrom,
  convertRateTo,
  loadCurrencyRate,
  setLoadState,
  checkFieldState
} from '../../actions/converter-actions/converter-actions';

const initialState = {
  date: new Date(),
  from: {
    amount: 1000,
    rate: 1,
    currency: 'RUB',
    currencyDisabled: 'USD',
  },
  to: {
    amount: 0.0137,
    rate: 1,
    currency: 'USD',
    currencyDisabled: 'RUB',
  },
  isLoading: true,
  isValid: true,
};

const converterData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrencyFrom, ({from, to}, {payload}) => {
      from.currency = payload;
      to.currencyDisabled = payload;
    })
    .addCase(changeCurrencyTo, ({from, to}, {payload}) => {
      to.currency = payload;
      from.currencyDisabled = payload;
    })
    .addCase(changeDate, (state, {payload}) => {
      state.date = payload;
    })
    .addCase(convertRateFrom, ({from, to}, {payload}) => {
      from.amount = payload;
      to.amount = getConvertibleCurrency(payload, from.rate, to.rate);
    })
    .addCase(convertRateTo, ({from, to}, {payload}) => {
      to.amount = payload;
      from.amount = getConvertibleCurrency(payload, to.rate, from.rate);
    })
    .addCase(loadCurrencyRate, (state, {payload}) => {
      state.to.rate = payload.rates[state.to.currency];

      if (state.isValid) {
        state.to.amount = getConvertibleCurrency(state.from.amount, state.from.rate, state.to.rate);
      }
    })
    .addCase(setLoadState, (state, {payload}) => {
      state.isLoading = payload;
    })
    .addCase(checkFieldState, (state, {payload}) => {
      state.isValid = payload;
    });
});

export default converterData;
