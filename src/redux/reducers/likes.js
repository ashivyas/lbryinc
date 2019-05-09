import { ACTIONS } from 'lbry-redux';

const reducers = {};

const defaultState = {
  likeStatus: false,
  isLiked: false,
  likeCount: 0,
  dislikeStatus: false,
  dislikeCount: 0,
};

reducers[ACTIONS.LIKE_ON_CLICK] = (state, action) =>
  Object.assign({}, state, {
    likeStatus: !state.likeStatus,
    isLiked: action.data.isLiked,
  });

reducers[ACTIONS.LIKE_COUNT] = (state, action) =>
  Object.assign({}, state, {
    likes: action.data.likeCount,
    dislikes: action.data.dislikeCount,
  });
reducers[ACTIONS.DISLIKE_ON_CLICK] = (state, action) =>
  Object.assign({}, state, {
    dislikeStatus: !state.dislikeStatus,
    isDisliked: action.data.isDisliked,
  });

// reducers[ACTIONS.DISLIKE_COUNT] = async(state, action) =>
//   Object.assign({}, state, {
//     dislikeCount: action.data.dislikeCount,
//   });

reducers[ACTIONS.LIKE_CHECK] = (state, action) =>
  Object.assign({}, state, {
    likeCheck: !state.likeCheck,
  });

export function likesReducer(state = defaultState, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
