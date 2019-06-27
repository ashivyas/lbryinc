import { handleActions } from 'util/redux-utils';
import * as ACTIONS from 'constants/action_types';

const defaultState = {
  historyList: {},
};

export const historyReducer = handleActions(
  {
    /*eslint-disable */

    //suppress all warnings between comments
    // eslint-disable-next-line no-use-before-define
    [ACTIONS.ADD_TO_HISTORY]: (state, action) => ({
      ...state,
    }),
    /* eslint-enable */
    [ACTIONS.FETCH_HISTORY]: (state, action) => {
      const { historyList } = action.data;

      return {
        ...state,
        historyList,
      };
    },
    [ACTIONS.DELETE_HISTORY]: (state, action) => {
      const { claimId } = action.data;
      return {
        ...state,
        claimId,
      };
    },
    [ACTIONS.DELETE_ALL_HISTORY]: (state, action) => {
      const { data } = action.data;
      return {
        ...state,
        data,
      };
    },
  },
  defaultState
);
