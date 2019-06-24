// Auth Token
export const GENERATE_AUTH_TOKEN_FAILURE = 'GENERATE_AUTH_TOKEN_FAILURE';
export const GENERATE_AUTH_TOKEN_STARTED = 'GENERATE_AUTH_TOKEN_STARTED';
export const GENERATE_AUTH_TOKEN_SUCCESS = 'GENERATE_AUTH_TOKEN_SUCCESS';

// Claims
export const FETCH_FEATURED_CONTENT_STARTED = 'FETCH_FEATURED_CONTENT_STARTED';
export const FETCH_FEATURED_CONTENT_COMPLETED = 'FETCH_FEATURED_CONTENT_COMPLETED';
export const FETCH_TRENDING_CONTENT_STARTED = 'FETCH_TRENDING_CONTENT_STARTED';
export const FETCH_TRENDING_CONTENT_COMPLETED = 'FETCH_TRENDING_CONTENT_COMPLETED';
export const RESOLVE_URIS_STARTED = 'RESOLVE_URIS_STARTED';
export const RESOLVE_URIS_COMPLETED = 'RESOLVE_URIS_COMPLETED';
export const FETCH_CHANNEL_CLAIMS_STARTED = 'FETCH_CHANNEL_CLAIMS_STARTED';
export const FETCH_CHANNEL_CLAIMS_COMPLETED = 'FETCH_CHANNEL_CLAIMS_COMPLETED';
export const FETCH_CHANNEL_CLAIM_COUNT_STARTED = 'FETCH_CHANNEL_CLAIM_COUNT_STARTED';
export const FETCH_CHANNEL_CLAIM_COUNT_COMPLETED = 'FETCH_CHANNEL_CLAIM_COUNT_COMPLETED';
export const FETCH_CLAIM_LIST_MINE_STARTED = 'FETCH_CLAIM_LIST_MINE_STARTED';
export const FETCH_CLAIM_LIST_MINE_COMPLETED = 'FETCH_CLAIM_LIST_MINE_COMPLETED';
export const ABANDON_CLAIM_STARTED = 'ABANDON_CLAIM_STARTED';
export const ABANDON_CLAIM_SUCCEEDED = 'ABANDON_CLAIM_SUCCEEDED';
export const FETCH_CHANNEL_LIST_STARTED = 'FETCH_CHANNEL_LIST_STARTED';
export const FETCH_CHANNEL_LIST_COMPLETED = 'FETCH_CHANNEL_LIST_COMPLETED';
export const CREATE_CHANNEL_STARTED = 'CREATE_CHANNEL_STARTED';
export const CREATE_CHANNEL_COMPLETED = 'CREATE_CHANNEL_COMPLETED';
export const PUBLISH_STARTED = 'PUBLISH_STARTED';
export const PUBLISH_COMPLETED = 'PUBLISH_COMPLETED';
export const PUBLISH_FAILED = 'PUBLISH_FAILED';
export const SET_PLAYING_URI = 'SET_PLAYING_URI';
export const SET_CONTENT_POSITION = 'SET_CONTENT_POSITION';
export const SET_CONTENT_LAST_VIEWED = 'SET_CONTENT_LAST_VIEWED';
export const CLEAR_CONTENT_HISTORY_URI = 'CLEAR_CONTENT_HISTORY_URI';
export const CLEAR_CONTENT_HISTORY_ALL = 'CLEAR_CONTENT_HISTORY_ALL';

// Subscriptions
export const CHANNEL_SUBSCRIBE = 'CHANNEL_SUBSCRIBE';
export const CHANNEL_UNSUBSCRIBE = 'CHANNEL_UNSUBSCRIBE';
export const CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS =
  'CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS';
export const CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS =
  'CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS';
export const HAS_FETCHED_SUBSCRIPTIONS = 'HAS_FETCHED_SUBSCRIPTIONS';
export const SET_SUBSCRIPTION_LATEST = 'SET_SUBSCRIPTION_LATEST';
export const UPDATE_SUBSCRIPTION_UNREADS = 'UPDATE_SUBSCRIPTION_UNREADS';
export const REMOVE_SUBSCRIPTION_UNREADS = 'REMOVE_SUBSCRIPTION_UNREADS';
export const CHECK_SUBSCRIPTION_STARTED = 'CHECK_SUBSCRIPTION_STARTED';
export const CHECK_SUBSCRIPTION_COMPLETED = 'CHECK_SUBSCRIPTION_COMPLETED';
export const CHECK_SUBSCRIPTIONS_SUBSCRIBE = 'CHECK_SUBSCRIPTIONS_SUBSCRIBE';
export const FETCH_SUBSCRIPTIONS_START = 'FETCH_SUBSCRIPTIONS_START';
export const FETCH_SUBSCRIPTIONS_FAIL = 'FETCH_SUBSCRIPTIONS_FAIL';
export const FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_SUBSCRIPTIONS_SUCCESS';
export const SET_VIEW_MODE = 'SET_VIEW_MODE';
export const GET_SUGGESTED_SUBSCRIPTIONS_START = 'GET_SUGGESTED_SUBSCRIPTIONS_START';
export const GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS = 'GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS';
export const GET_SUGGESTED_SUBSCRIPTIONS_FAIL = 'GET_SUGGESTED_SUBSCRIPTIONS_FAIL';
export const SUBSCRIPTION_FIRST_RUN_COMPLETED = 'SUBSCRIPTION_FIRST_RUN_COMPLETED';
export const VIEW_SUGGESTED_SUBSCRIPTIONS = 'VIEW_SUGGESTED_SUBSCRIPTIONS';
export const FETCH_SUBSCRIPTION_COUNT = 'FETCH_SUBSCRIPTION_COUNT';

// Blacklist
export const FETCH_BLACK_LISTED_CONTENT_STARTED = 'FETCH_BLACK_LISTED_CONTENT_STARTED';
export const FETCH_BLACK_LISTED_CONTENT_COMPLETED = 'FETCH_BLACK_LISTED_CONTENT_COMPLETED';
export const FETCH_BLACK_LISTED_CONTENT_FAILED = 'FETCH_BLACK_LISTED_CONTENT_FAILED';
export const BLACK_LISTED_CONTENT_SUBSCRIBE = 'BLACK_LISTED_CONTENT_SUBSCRIBE';

// Cost Info
export const FETCH_COST_INFO_STARTED = 'FETCH_COST_INFO_STARTED';
export const FETCH_COST_INFO_COMPLETED = 'FETCH_COST_INFO_COMPLETED';

// File Stats
export const FETCH_VIEW_COUNT_STARTED = 'FETCH_VIEW_COUNT_STARTED';
export const FETCH_VIEW_COUNT_FAILED = 'FETCH_VIEW_COUNT_FAILED';
export const FETCH_VIEW_COUNT_COMPLETED = 'FETCH_VIEW_COUNT_COMPLETED';

// Cross-device Sync
export const GET_SYNC_STARTED = 'GET_SYNC_STARTED';
export const GET_SYNC_COMPLETED = 'GET_SYNC_COMPLETED';
export const SET_SYNC_STARTED = 'SET_SYNC_STARTED';
export const SET_SYNC_FAILED = 'SET_SYNC_FAILED';
export const SET_SYNC_COMPLETED = 'SET_SYNC_COMPLETED';
export const SET_DEFAULT_ACCOUNT = 'SET_DEFAULT_ACCOUNT';

// Likes
export const LIKE_ON_CLICK = 'LIKE_ON_CLICK';
export const LIKE_COUNT = 'LIKE_COUNT';
export const LIKE_CHECK = 'LIKE_CHECK';
export const DISLIKE_ON_CLICK = 'DISLIKE_ON_CLICK';
export const FETCH_LIKED_LIST = 'FETCH_LIKED_LIST';

// Views
export const REG_VIEW = 'REG_VIEW';
export const VIEW_COUNTER = 'REG_COUNTER';

// Playlist - Default Watch Later
export const FETCH_PLAYLIST = 'FETCH_PLAYLIST';
export const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST';
export const REMOVE_FROM_PLAYLIST = 'REMOVE_FROM_PLAYLIST';

// Category List
export const FETCH_CATEGORY_LIST = 'FETCH_CATEGORY_LIST';

// User History
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const FETCH_HISTORY = 'FETCH_HISTORY';
export const DELETE_HISTORY = 'DELETE_HISTORY';
export const DELETE_ALL_HISTORY = 'DELETE_ALL_HISTORY';

// Search Queries
export const AUTOCOMPLETE_SEARCH_QUERY = 'AUTOCOMPLETE_SEARCH_QUERY';
export const SEARCH_QUERY_RESULT = 'SEARCH_QUERY_RESULT';
// Report
export const USER_REPORT_SUCCESS = 'USER_REPORT_SUCCESS';

// Category
export const FETCH_CONTENT_CATEGORY = 'FETCH_CONTENT_CATEGORY';
