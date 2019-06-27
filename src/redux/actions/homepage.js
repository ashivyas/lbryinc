import Lbryio from 'lbryio';
import { batchActions, doResolveUris } from 'lbry-redux';
import * as ACTIONS from 'constants/action_types';

export function doFetchFeaturedUris(offloadResolve = false) {
  return dispatch => {
    dispatch({
      type: ACTIONS.FETCH_FEATURED_CONTENT_STARTED,
    });

    const success = ({ Uris }) => {
      let urisToResolve = [];
      Object.keys(Uris).forEach(category => {
        urisToResolve = [...urisToResolve, ...Uris[category]];
      });

      const actions = [
        {
          type: ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED,
          data: {
            uris: Uris,
            success: true,
          },
        },
      ];
      if (urisToResolve.length && !offloadResolve) {
        actions.push(doResolveUris(urisToResolve));
      }

      dispatch(batchActions(...actions));
    };

    const failure = () => {
      dispatch({
        type: ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED,
        data: {
          uris: {},
        },
      });
    };

    Lbryio.call('file', 'list_homepage').then(success, failure);
  };
}

export function doFetchTrendingUris() {
  return dispatch => {
    dispatch({
      type: ACTIONS.FETCH_TRENDING_CONTENT_STARTED,
    });

    const success = data => {
      const urisToResolve = data.map(uri => uri.url);
      const actions = [
        doResolveUris(urisToResolve),
        {
          type: ACTIONS.FETCH_TRENDING_CONTENT_COMPLETED,
          data: {
            uris: data,
            success: true,
          },
        },
      ];
      dispatch(batchActions(...actions));
    };

    const failure = () => {
      dispatch({
        type: ACTIONS.FETCH_TRENDING_CONTENT_COMPLETED,
        data: {
          uris: [],
        },
      });
    };

    Lbryio.call('file', 'list_trending').then(success, failure);
  };
}

// eslint-disable-next-line camelcase
export function doFetchContentCategory(content_category) {
  return dispatch => {
    Lbryio.call(
      'file',
      'fetchContentCategory',
      {
        content_category,
      },
      'post'
    ).then(data => {
      dispatch({
        type: ACTIONS.FETCH_CONTENT_CATEGORY,
        data: { uris: data },
      });
    });
  };
}

export function doFetchRecentList() {
  return dispatch => {
    Lbryio.call('file', 'recent_list').then(data => {
      dispatch({
        type: ACTIONS.FETCH_RECENT_LIST,
        data,
      });
    });
  };
}

export function doFetchNotInterestedList() {
  return dispatch => {
    Lbryio.call('file', 'not_interested_list').then(data => {
      dispatch({
        type: ACTIONS.FETCH_NOT_INTERESTED_LIST,
        data,
      });
    });
  };
}

// eslint-disable-next-line camelcase
export function doNotInterested(claim_id) {
  return dispatch => {
    Lbryio.call('file', 'not_interested', { claim_id }, 'post').then(data => {
      dispatch({
        type: ACTIONS.NOT_INTERESTED_CONTENT,
        data,
      });
    });
  };
}
