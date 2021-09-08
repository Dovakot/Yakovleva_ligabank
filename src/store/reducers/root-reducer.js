import {combineReducers} from 'redux';
import converterData from './converter-data/converter-data';
import historyData from './history-data/history-data';

const NameSpace = {
  CONVERTER: 'CONVERTER',
  HISTORY: 'HISTORY',
};

const rootReducer = combineReducers({
  [NameSpace.CONVERTER]: converterData,
  [NameSpace.HISTORY]: historyData,
});

export {
  NameSpace,
  rootReducer
};
