import { ACTIONS, Lbry, doToast } from 'lbry-redux';
import { doRewardList } from 'redux/actions/rewards';
import Lbryio from 'lbryio';

export function doLikeOnClick(claimId) {
  return dispatch => {
    // First call to check the likeStatus
    Lbryio.call('likes', 'check', claimId, 'post').then(check => {
      // Second call to compare and update the likeStatus
      Lbryio.call('likes', 'like', { claim_id: claimId.claimId, liked: true }, 'post').then(res => {
        dispatch({
          type: ACTIONS.LIKE_ON_CLICK,
          data: {
            likeStatus: !check,
            isLiked: res.liked,
          },
        });
      });
    });
  };
}

export function doDislikeOnClick(claimId) {
  return dispatch => {
    // First call to check the likeStatus
    Lbryio.call('likes', 'check', claimId, 'post').then(check => {
      // Second call to compare and update the likeStatus
      Lbryio.call('likes', 'dislike', { claim_id: claimId.claimId, disliked: true }, 'post').then(
        res => {
          dispatch({
            type: ACTIONS.DISLIKE_ON_CLICK,
            data: {
              dislikeStatus: !check,
              isDisliked: res.disliked,
            },
          });
        }
      );
    });
  };
}

export function doLikeCount(claimId) {
  return dispatch => {
    Lbryio.call('likes', 'count', { claim_id: claimId.claimId }, 'post').then(count => {
      console.log('count inc', claimId.claimId);
      dispatch({
        type: ACTIONS.LIKE_COUNT,
        data: {
          likeCount: count.likes,
          dislikeCount: count.dislikes,
        },
      });
    });
  };
}
