// @flow
import Lbryio from 'lbryio';
import * as ACTIONS from 'constants/action_types';

export function doAddToHistory(claimId, claimName) {
  return dispatch => {
    Lbryio.call('history', 'add', { claim_id: claimId, claim_name: claimName }, 'post').then(() => {
      dispatch({
        type: ACTIONS.ADD_TO_HISTORY,
      });
    });
  };
}

export function doFetchHistoryList() {
  return dispatch => {
    Lbryio.call('history', 'list').then(list => {
      dispatch({
        type: ACTIONS.FETCH_HISTORY,
        data: {
          historyList: list,
        },
      });
    });
  };
}

export function doRemoveFromHistory(claimId) {
  return dispatch => {
    Lbryio.call('history', 'delete', { claim_id: claimId }, 'post').then(() => {
      dispatch({
        type: ACTIONS.DELETE_HISTORY,
      });
    });
  };
}

export function doRemoveAllFromHistory() {
  return dispatch => {
    Lbryio.call('history', 'delete_all', {}, 'post').then(() => {
      dispatch({
        type: ACTIONS.DELETE_ALL_HISTORY,
      });
    });
  };
}
