import { createSelector } from 'reselect';

export const selectState = state => state.likes || {};

export const likeSelector = createSelector(
  selectState,
  state => state.likeStatus && state.isLiked
);

export const dislikeSelector = createSelector(
  selectState,
  state => state.dislikeStatus && state.isDisliked
);

export const countSelector = createSelector(
  selectState,
  state => state.likeCount && state.dislikeCount
);
