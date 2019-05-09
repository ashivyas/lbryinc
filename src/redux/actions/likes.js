import { ACTIONS, Lbry, doToast } from 'lbry-redux';
import { doRewardList } from 'redux/actions/rewards';
import Lbryio from 'lbryio';

export function doLikeOnClick() {
  return dispatch => {
    // First call to check the likeStatus
    Lbryio.call(
      'likes',
      'check',
      { claim_id: '9ab6ff053f419633858c2f2351b1315c41feadc0' },
      'post'
    ).then(check => {
      // Second call to compare and update the likeStatus
      Lbryio.call(
        'likes',
        'like',
        { claim_id: '9ab6ff053f419633858c2f2351b1315c41feadc0' },
        'post'
      ).then(res => {
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

export function doDislikeOnClick() {
  return dispatch => {
    // First call to check the likeStatus
    Lbryio.call(
      'likes',
      'check',
      { claim_id: '9ab6ff053f419633858c2f2351b1315c41feadc0' },
      'post'
    ).then(check => {
      // Second call to compare and update the likeStatus
      Lbryio.call(
        'likes',
        'dislike',
        { claim_id: '9ab6ff053f419633858c2f2351b1315c41feadc0' },
        'post'
      ).then(res => {
        dispatch({
          type: ACTIONS.DISLIKE_ON_CLICK,
          data: {
            dislikeStatus: !check,
            isDisliked: res.disliked,
          },
        });
      });
    });
  };
}

export function doLikeCount() {
  return dispatch => {
    Lbryio.call(
      'likes',
      'count',
      { claim_id: '9ab6ff053f419633858c2f2351b1315c41feadc0' },
      'post'
    ).then(count => {
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
