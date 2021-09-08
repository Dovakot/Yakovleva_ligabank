import {createAction} from '@reduxjs/toolkit';
import ActionType from '../actions';

const saveHistory = createAction(ActionType.SAVE_HISTORY, (data, count) => ({
  payload: {data, count},
}));

const clearHistory = createAction(ActionType.CLEAR_HISTORY);

export {
  saveHistory,
  clearHistory
};
