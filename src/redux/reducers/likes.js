import { handleActions } from 'util/redux-utils';
import * as ACTIONS from 'constants/action_types';

const defaultState = {
  likeStatus: false,
  likeCount: 0,
  dislikeStatus: false,
  dislikeCount: 0,
};

export const likesReducer = handleActions(
  {
    [ACTIONS.LIKE_ON_CLICK]: (state, action) => {
      const { likeStatus } = action.data;

      return {
        ...state,
        likeCount: likeStatus ? state.likeCount + 1 : state.likeCount - 1,
        dislikeCount: state.dislikeStatus ? state.dislikeCount - 1 : state.dislikeCount,
        likeStatus,
        dislikeStatus: false,
      };
    },

    [ACTIONS.DISLIKE_ON_CLICK]: (state, action) => {
      const { dislikeStatus } = action.data;

      return {
        ...state,
        likeCount: state.likeStatus ? state.likeCount - 1 : state.likeCount,
        dislikeCount: dislikeStatus ? state.dislikeCount + 1 : state.dislikeCount - 1,
        dislikeStatus,
        likeStatus: false,
      };
    },

    [ACTIONS.LIKE_COUNT]: (state, action) => {
      const { likeCount, dislikeCount, likeStatus, dislikeStatus } = action.data;

      return {
        ...state,
        likeCount,
        dislikeCount,
        likeStatus,
        dislikeStatus,
      };
    },
  },
  defaultState
);
