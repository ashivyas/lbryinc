import { handleActions } from 'util/redux-utils';
import * as ACTIONS from 'constants/action_types';

const defaultState = {
  fetchingFeaturedContent: false,
  fetchingFeaturedContentFailed: false,
  featuredUris: undefined,
  fetchingTrendingContent: false,
  fetchingTrendingContentFailed: false,
  trendingUris: undefined,
};

export const homepageReducer = handleActions(
  {
    [ACTIONS.FETCH_FEATURED_CONTENT_STARTED]: state => ({
      ...state,
      fetchingFeaturedContent: true,
    }),

    [ACTIONS.FETCH_FEATURED_CONTENT_COMPLETED]: (state, action) => {
      const { uris, success } = action.data;

      return {
        ...state,
        fetchingFeaturedContent: false,
        fetchingFeaturedContentFailed: !success,
        featuredUris: uris,
      };
    },

    [ACTIONS.FETCH_TRENDING_CONTENT_STARTED]: state => ({
      ...state,
      fetchingTrendingContent: true,
    }),

    [ACTIONS.FETCH_CONTENT_CATEGORY]: (state, action) => {
      const { uris } = action.data;
      return {
        ...state,
        fetchingContentCategory: uris,
      };
    },

    [ACTIONS.FETCH_RECENT_LIST]: (state, action) => {
      const { data } = action.data;
      return {
        ...state,
        fetchingRecentList: data,
      };
    },

    [ACTIONS.FETCH_NOT_INTERESTED_LIST]: (state, action) => {
      const { data } = action.data;
      return {
        ...state,
        fetchingNotInterestedList: data,
      };
    },

    [ACTIONS.NOT_INTERESTED_CONTENT]: (state, action) => {
      const { data } = action.data.claim_id;
      return {
        ...state,
        notInterestedContent: data,
      };
    },

    [ACTIONS.FETCH_TRENDING_CONTENT_COMPLETED]: (state, action) => {
      const { uris, success } = action.data;

      return {
        ...state,
        fetchingTrendingContent: false,
        fetchingTrendingContentFailed: !success,
        trendingUris: uris,
      };
    },
  },
  defaultState
);
