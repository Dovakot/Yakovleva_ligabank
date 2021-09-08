import {createAction} from '@reduxjs/toolkit';
import ActionType from '../actions';

const changeCurrencyFrom = createAction(ActionType.CHANGE_CURRENCY_FROM, (currency) => ({
  payload: currency,
}));

const changeCurrencyTo = createAction(ActionType.CHANGE_CURRENCY_TO, (currency) => ({
  payload: currency,
}));

const changeDate = createAction(ActionType.CHANGE_DATE, (date) => ({
  payload: date,
}));

const convertRateTo = createAction(ActionType.CONVERT_RATE_FROM, (amount) => ({
  payload: amount,
}));

const convertRateFrom = createAction(ActionType.CONVERT_RATE_TO, (amount) => ({
  payload: amount,
}));

const loadCurrencyRate = createAction(ActionType.LOAD_CURRENCY_RATE, (data) => ({
  payload: data,
}));

const setLoadState = createAction(ActionType.SET_LOAD_STATE, (flag) => ({
  payload: flag,
}));

const checkFieldState = createAction(ActionType.CHECK_FIELD_STATE, (flag) => ({
  payload: flag,
}));

export {
  changeCurrencyFrom,
  changeCurrencyTo,
  changeDate,
  convertRateTo,
  convertRateFrom,
  loadCurrencyRate,
  setLoadState,
  checkFieldState
};
