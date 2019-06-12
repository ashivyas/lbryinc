import { handleActions } from 'util/redux-utils';
import * as ACTIONS from 'constants/action_types';

const defaultState = {
  categoryListing: {},
};

export const categoryReducer = handleActions(
  {
    [ACTIONS.FETCH_CATEGORY_LIST]: (state, action) => {
      const { categoryListing } = action.data;

      return {
        ...state,
        categoryListing,
      };
    },
  },
  defaultState
);
