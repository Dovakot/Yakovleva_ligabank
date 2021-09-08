import {NameSpace} from '../root-reducer';

const getRateData = (state) => ({
  from: state[NameSpace.CONVERTER].from,
  to: state[NameSpace.CONVERTER].to,
});

const getCurrentDate = (state) => state[NameSpace.CONVERTER].date;
const getLoadState = (state) => state[NameSpace.CONVERTER].isLoading;
const getFieldState = (state) => state[NameSpace.CONVERTER].isValid;

export {
  getRateData,
  getCurrentDate,
  getLoadState,
  getFieldState
};
