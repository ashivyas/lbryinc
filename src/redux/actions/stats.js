// @flow
import Lbryio from 'lbryio';
import * as ACTIONS from 'constants/action_types';

export function doFetchViewCount(claimId) {
  return dispatch => {
    Lbryio.call('file', 'view_count', { claim_id: claimId }).then(res => {
      dispatch({
        type: ACTIONS.VIEW_COUNTER,
        data: {
          viewCount: res.count,
        },
      });
    });
  };
}

export function doRegView(claimId) {
  return dispatch => {
    Lbryio.call('file', 'view_count', { claim_id: claimId }, 'post').then(res => {
      dispatch({
        type: ACTIONS.REG_VIEW,
        data: {
          viewCount: res.count,
        },
      });
    });
  };
}
