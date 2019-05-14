import { createSelector } from 'reselect';

export const selectState = state => state.likes || {};

export const likeSelector = createSelector(
  selectState,
  state => state.likeStatus
);

export const dislikeSelector = createSelector(
  selectState,
  state => state.dislikeStatus
);

export const likeCountSelector = createSelector(
  selectState,
  state => state.likeCount
);

export const dislikeCountSelector = createSelector(
  selectState,
  state => state.dislikeCount
);
