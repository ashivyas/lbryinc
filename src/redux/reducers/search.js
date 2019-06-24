import { handleActions } from 'util/redux-utils';
import * as ACTIONS from 'constants/action_types';

const defaultState = {
  autocompleteList: {},
  searchQueryList:{},
};

export const searchReducer = handleActions(
  {
    [ACTIONS.AUTOCOMPLETE_SEARCH_QUERY]: (state, action) => {
      const { autocompleteList } = action.data;

      return {
        ...state,
        autocompleteList,
      };
    },
    [ACTIONS.AUTOCOMPLETE_SEARCH_QUERY]: (state, action) => {
        const { searchQueryList } = action.data;
  
        return {
          ...state,
          searchQueryList,
        };
    },
  },
  defaultState
);
