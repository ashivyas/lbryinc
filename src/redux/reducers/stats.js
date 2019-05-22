import { handleActions } from 'util/redux-utils';
import * as ACTIONS from 'constants/action_types';

const defaultState = {
  fetchingViewCount: false,
  viewCountError: undefined,
  viewCountById: {},
  viewCount: 0,
};

export const statsReducer = handleActions(
  {
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
