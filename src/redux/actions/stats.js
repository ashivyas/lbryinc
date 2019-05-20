// @flow
import Lbryio from 'lbryio';
import * as ACTIONS from 'constants/action_types';

// export const doFetchViewCount = (claimId: string) => dispatch => {
//   dispatch({ type: ACTIONS.FETCH_VIEW_COUNT_STARTED });

//   return Lbryio.call('file', 'view_count', { claim_id: claimId }, 'post')
//     .then(res => {
//       console.log('view res', res[0]['count']);
//       dispatch({ type: ACTIONS.FETCH_VIEW_COUNT_COMPLETED, data: { viewCount: res[0]['count'] } });
//     })
//     .catch(error => {
//       dispatch({ type: ACTIONS.FETCH_VIEW_COUNT_FAILED, data: error });
//     });
// };

export function doFetchViewCount(claimId) {
  return dispatch => {
    Lbryio.call('file', 'view_count', { claim_id: claimId }, 'post').then(res => {
      dispatch({
        type: ACTIONS.VIEW_COUNTER,
        data: {
          viewCount: res[0].count,
        },
      });
    });
  };
}

export function doRegView(claimId) {
  return dispatch => {
    Lbryio.call('file', 'view_count/increment', { claim_id: claimId }, 'post').then(res => {
      dispatch({
        type: ACTIONS.REG_VIEW,
        data: {
          viewCount: res.count,
        },
      });
    });
  };
}
