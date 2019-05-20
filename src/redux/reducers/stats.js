import { handleActions } from 'util/redux-utils';
import * as ACTIONS from 'constants/action_types';

const defaultState = {
  fetchingViewCount: false,
  viewCountError: undefined,
  viewCountById: {},
};

export const statsReducer = handleActions(
  {
    // [ACTIONS.FETCH_VIEW_COUNT_STARTED]: state => ({ ...state, fetchingViewCount: true }),
    // [ACTIONS.FETCH_VIEW_COUNT_FAILED]: (state, action) => ({
    //   ...state,
    //   viewCountError: action.data,
    // }),
    // [ACTIONS.FETCH_VIEW_COUNT_COMPLETED]: (state, action) => {
    //   const { claimId, viewCount } = action.data;

    //   const viewCountById = { ...state.viewCountById, [claimId]: viewCount };
    //   return {
    //     ...state,
    //     fetchingViewCount: false,
    //     viewCountById,
    //   };
    // },
    [ACTIONS.VIEW_COUNTER]: (state, action) => {
      const { viewCount } = action.data;

      return {
        ...state,
        viewCount,
      };
    },
    [ACTIONS.REG_VIEW]: (state, action) => {
      const { viewCount } = action.data;

      return {
        ...state,
        viewCount,
      };
    },
  },
  defaultState
);
