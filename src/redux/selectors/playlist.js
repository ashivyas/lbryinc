import { createSelector } from 'reselect';

export const selectState = state => state.playlist || {};

export const selectPlaylistName = createSelector(selectState, state => state.playlistName);

export const selectPlaylistUris = createSelector(selectState, state => state.playlistUris);
