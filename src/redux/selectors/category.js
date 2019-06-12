import { createSelector } from 'reselect';

export const selectState = state => state.category || {};

export const selectCategoryListing = createSelector(
  selectState,
  state => state.categoryListing
);
