import Lbryio from 'lbryio';
import * as ACTIONS from 'constants/action_types';

export function doLikeOnClick(claimId, likeStatus) {
  return dispatch => {
    Lbryio.call('likes', 'like', { claim_id: claimId, liked: likeStatus }, 'post').then(() => {
      dispatch({
        type: ACTIONS.LIKE_ON_CLICK,
        data: {
          likeStatus,
        },
      });
    });
  };
}

export function doDislikeOnClick(claimId, dislikeStatus) {
  return dispatch => {
    Lbryio.call('likes', 'dislike', { claim_id: claimId, disliked: dislikeStatus }, 'post').then(
      () => {
        dispatch({
          type: ACTIONS.DISLIKE_ON_CLICK,
          data: {
            dislikeStatus,
          },
        });
      }
    );
  };
}

export function doLikeCount(claimId) {
  return dispatch => {
    Lbryio.call('likes', 'count', { claim_id: claimId }, 'post').then(count => {
      dispatch({
        type: ACTIONS.LIKE_COUNT,
        data: {
          likeCount: count.likes,
          dislikeCount: count.dislikes,
          likeStatus: count.likeStatus,
          dislikeStatus: count.dislikeStatus,
        },
      });
    });
  };
}

export function doLikeCheck(claimId) {
  return dispatch => {
    Lbryio.call('likes', 'check', { claim_id: claimId }, 'post').then(count => {
      dispatch({
        type: ACTIONS.LIKE_CHECK,
        data: {
          likeStatus: count.likeStatus,
          dislikeStatus: count.dislikeStatus,
        },
      });
    });
  };
}
