import { createSelector } from 'reselect';

const selectState = state => state.history || {};

export const selectHistoryList = createSelector(
  selectState,
  state => state.historyList
);
