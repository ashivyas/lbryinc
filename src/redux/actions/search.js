// @flow
import Lbryio from 'lbryio';
import * as ACTIONS from 'constants/action_types';

export function doAutocompleteSearchQuery() {
  return dispatch => {
    Lbryio.call('autocomplete', '').then(() => {
      dispatch({
        type: ACTIONS.AUTOCOMPLETE_SEARCH_QUERY,
        data:{
            autocompleteList:list,
        }
      });
    });
  };
}

export function doSearchQuery() {
  return dispatch => {
    Lbryio.call('search', '').then(list => {
      dispatch({
        type: ACTIONS.SEARCH_QUERY_RESULT,
        data: {
          searchQueryList: list,
        },
      });
    });
  };
}