import Lbryio from 'lbryio';
import * as ACTIONS from 'constants/action_types';

export function doLikeOnClick(claimId, likeStatus, claimName) {
  return dispatch => {
    Lbryio.call(
      'likes',
      'like',
      { claim_id: claimId, liked: likeStatus, claim_name: claimName },
      'post'
    ).then(() => {
      dispatch({
        type: ACTIONS.LIKE_ON_CLICK,
        data: {
          likeStatus,
        },
      });
    });
  };
}

export function doDislikeOnClick(claimId, dislikeStatus, claimName) {
  return dispatch => {
    Lbryio.call(
      'likes',
      'dislike',
      { claim_id: claimId, disliked: dislikeStatus, claim_name: claimName },
      'post'
    ).then(() => {
      dispatch({
        type: ACTIONS.DISLIKE_ON_CLICK,
        data: {
          dislikeStatus,
        },
      });
    });
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

export function doFetchLikedList() {
  return dispatch => {
    Lbryio.call('likes', 'list').then(list => {
      dispatch({
        type: ACTIONS.FETCH_LIKED_LIST,
        data: {
          likedUris: list,
        },
      });
    });
  };
}
