import { createSelector } from 'reselect';

const selectState = state => state.stats || {};

export const selectViewCount = createSelector(selectState, state => state.viewCount);
