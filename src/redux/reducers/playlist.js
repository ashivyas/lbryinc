import { handleActions } from 'util/redux-utils';
import * as ACTIONS from 'constants/action_types';

const defaultState = {
  playlistUris: {},
  playlistName: 'Watch Later',
};

export const playlistReducer = handleActions(
  {
    [ACTIONS.FETCH_PLAYLIST]: (state, action) => {
      const { playlistUris, playlistName } = action.data;

      return {
        ...state,
        playlistUris,
        playlistName,
      };
    },
    [ACTIONS.ADD_TO_PLAYLIST]: (state, action) => {
      const { playlistName } = action.data;

      return {
        ...state,
        playlistName,
      };
    },
    [ACTIONS.REMOVE_FROM_PLAYLIST]: (state, action) => {
      const { playlistName } = action.data;

      return {
        ...state,
        playlistName,
      };
    },
  },
  defaultState
);
