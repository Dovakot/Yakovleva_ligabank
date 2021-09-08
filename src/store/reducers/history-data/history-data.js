import {createReducer} from '@reduxjs/toolkit';

import {
  saveHistory,
  clearHistory
} from '../../actions/history-actions/history-actions';

const MAX_ITEM_HISTORY = 10;

const initialState = {
  data: [],
};

const historyData = createReducer(initialState, (builder) => {
  builder
    .addCase(saveHistory, (state, {payload}) => {
      if (payload.count === MAX_ITEM_HISTORY) {
        state.data.pop();
      }

      state.data.unshift(payload.data);
    })
    .addCase(clearHistory, (state) => {
      state.data = [];
    });
});

export default historyData;
