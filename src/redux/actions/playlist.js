// @flow
import Lbryio from 'lbryio';
import * as ACTIONS from 'constants/action_types';

export function doFetchPlaylist(playlistName) {
  return dispatch => {
    Lbryio.call('playlist', 'list', { name: playlistName }).then(res => {
      dispatch({
        type: ACTIONS.FETCH_PLAYLIST,
        data: {
          playlistUris: res,
          playlistName,
        },
      });
    });
  };
}

export function doAddToPlaylist(claimId, claimName, playlistName) {
  return dispatch => {
    Lbryio.call(
      'playlist',
      'add',
      { claim_id: claimId, claim_name: claimName, name: playlistName },
      'post'
    ).then(() => {
      dispatch({
        type: ACTIONS.ADD_TO_PLAYLIST,
        data: {
          playlistName,
        },
      });
    });
  };
}

export function doRemoveFromPlaylist(claimId, playlistName) {
  return dispatch => {
    Lbryio.call('playlist', 'remove', { claim_id: claimId, name: playlistName }, 'post').then(
      () => {
        dispatch({
          type: ACTIONS.REMOVE_FROM_PLAYLIST,
          data: {
            playlistName,
          },
        });
      }
    );
  };
}
