import { handleActions } from 'util/redux-utils';
import * as ACTIONS from 'constants/action_types';

const defaultState = {
  historyList: {},
};

export const historyReducer = handleActions(
  {
    [ACTIONS.ADD_TO_HISTORY]: (state, action) => ({
      ...state,
    }),
    [ACTIONS.FETCH_HISTORY]: (state, action) => {
      const { historyList } = action.data;

      return {
        ...state,
        historyList,
      };
    },
    [ACTIONS.DELETE_HISTORY]: (state, action) => ({
      ...state,
    }),
    [ACTIONS.DELETE_ALL_HISTORY]: (state, action) => ({
      ...state,
    }),
  },
  defaultState
);
