'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ACTIONS = require('lbry-redux');
var querystring = _interopDefault(require('querystring'));
var reselect = require('reselect');

// Auth Token
const GENERATE_AUTH_TOKEN_FAILURE = 'GENERATE_AUTH_TOKEN_FAILURE';
const GENERATE_AUTH_TOKEN_STARTED = 'GENERATE_AUTH_TOKEN_STARTED';
const GENERATE_AUTH_TOKEN_SUCCESS = 'GENERATE_AUTH_TOKEN_SUCCESS'; // Claims

const FETCH_FEATURED_CONTENT_STARTED = 'FETCH_FEATURED_CONTENT_STARTED';
const FETCH_FEATURED_CONTENT_COMPLETED = 'FETCH_FEATURED_CONTENT_COMPLETED';
const FETCH_TRENDING_CONTENT_STARTED = 'FETCH_TRENDING_CONTENT_STARTED';
const FETCH_TRENDING_CONTENT_COMPLETED = 'FETCH_TRENDING_CONTENT_COMPLETED';
const RESOLVE_URIS_STARTED = 'RESOLVE_URIS_STARTED';
const RESOLVE_URIS_COMPLETED = 'RESOLVE_URIS_COMPLETED';
const FETCH_CHANNEL_CLAIMS_STARTED = 'FETCH_CHANNEL_CLAIMS_STARTED';
const FETCH_CHANNEL_CLAIMS_COMPLETED = 'FETCH_CHANNEL_CLAIMS_COMPLETED';
const FETCH_CHANNEL_CLAIM_COUNT_STARTED = 'FETCH_CHANNEL_CLAIM_COUNT_STARTED';
const FETCH_CHANNEL_CLAIM_COUNT_COMPLETED = 'FETCH_CHANNEL_CLAIM_COUNT_COMPLETED';
const FETCH_CLAIM_LIST_MINE_STARTED = 'FETCH_CLAIM_LIST_MINE_STARTED';
const FETCH_CLAIM_LIST_MINE_COMPLETED = 'FETCH_CLAIM_LIST_MINE_COMPLETED';
const ABANDON_CLAIM_STARTED = 'ABANDON_CLAIM_STARTED';
const ABANDON_CLAIM_SUCCEEDED = 'ABANDON_CLAIM_SUCCEEDED';
const FETCH_CHANNEL_LIST_STARTED = 'FETCH_CHANNEL_LIST_STARTED';
const FETCH_CHANNEL_LIST_COMPLETED = 'FETCH_CHANNEL_LIST_COMPLETED';
const CREATE_CHANNEL_STARTED = 'CREATE_CHANNEL_STARTED';
const CREATE_CHANNEL_COMPLETED = 'CREATE_CHANNEL_COMPLETED';
const PUBLISH_STARTED = 'PUBLISH_STARTED';
const PUBLISH_COMPLETED = 'PUBLISH_COMPLETED';
const PUBLISH_FAILED = 'PUBLISH_FAILED';
const SET_PLAYING_URI = 'SET_PLAYING_URI';
const SET_CONTENT_POSITION = 'SET_CONTENT_POSITION';
const SET_CONTENT_LAST_VIEWED = 'SET_CONTENT_LAST_VIEWED';
const CLEAR_CONTENT_HISTORY_URI = 'CLEAR_CONTENT_HISTORY_URI';
const CLEAR_CONTENT_HISTORY_ALL = 'CLEAR_CONTENT_HISTORY_ALL'; // Subscriptions

const CHANNEL_SUBSCRIBE = 'CHANNEL_SUBSCRIBE';
const CHANNEL_UNSUBSCRIBE = 'CHANNEL_UNSUBSCRIBE';
const CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS = 'CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS';
const CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS = 'CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS';
const HAS_FETCHED_SUBSCRIPTIONS = 'HAS_FETCHED_SUBSCRIPTIONS';
const SET_SUBSCRIPTION_LATEST = 'SET_SUBSCRIPTION_LATEST';
const UPDATE_SUBSCRIPTION_UNREADS = 'UPDATE_SUBSCRIPTION_UNREADS';
const REMOVE_SUBSCRIPTION_UNREADS = 'REMOVE_SUBSCRIPTION_UNREADS';
const CHECK_SUBSCRIPTION_STARTED = 'CHECK_SUBSCRIPTION_STARTED';
const CHECK_SUBSCRIPTION_COMPLETED = 'CHECK_SUBSCRIPTION_COMPLETED';
const CHECK_SUBSCRIPTIONS_SUBSCRIBE = 'CHECK_SUBSCRIPTIONS_SUBSCRIBE';
const FETCH_SUBSCRIPTIONS_START = 'FETCH_SUBSCRIPTIONS_START';
const FETCH_SUBSCRIPTIONS_FAIL = 'FETCH_SUBSCRIPTIONS_FAIL';
const FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_SUBSCRIPTIONS_SUCCESS';
const SET_VIEW_MODE = 'SET_VIEW_MODE';
const GET_SUGGESTED_SUBSCRIPTIONS_START = 'GET_SUGGESTED_SUBSCRIPTIONS_START';
const GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS = 'GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS';
const GET_SUGGESTED_SUBSCRIPTIONS_FAIL = 'GET_SUGGESTED_SUBSCRIPTIONS_FAIL';
const SUBSCRIPTION_FIRST_RUN_COMPLETED = 'SUBSCRIPTION_FIRST_RUN_COMPLETED';
const VIEW_SUGGESTED_SUBSCRIPTIONS = 'VIEW_SUGGESTED_SUBSCRIPTIONS';
const FETCH_SUBSCRIPTION_COUNT = 'FETCH_SUBSCRIPTION_COUNT'; // Blacklist

const FETCH_BLACK_LISTED_CONTENT_STARTED = 'FETCH_BLACK_LISTED_CONTENT_STARTED';
const FETCH_BLACK_LISTED_CONTENT_COMPLETED = 'FETCH_BLACK_LISTED_CONTENT_COMPLETED';
const FETCH_BLACK_LISTED_CONTENT_FAILED = 'FETCH_BLACK_LISTED_CONTENT_FAILED';
const BLACK_LISTED_CONTENT_SUBSCRIBE = 'BLACK_LISTED_CONTENT_SUBSCRIBE'; // Cost Info

const FETCH_COST_INFO_STARTED = 'FETCH_COST_INFO_STARTED';
const FETCH_COST_INFO_COMPLETED = 'FETCH_COST_INFO_COMPLETED'; // File Stats

const FETCH_VIEW_COUNT_STARTED = 'FETCH_VIEW_COUNT_STARTED';
const FETCH_VIEW_COUNT_FAILED = 'FETCH_VIEW_COUNT_FAILED';
const FETCH_VIEW_COUNT_COMPLETED = 'FETCH_VIEW_COUNT_COMPLETED'; // Cross-device Sync

const GET_SYNC_STARTED = 'GET_SYNC_STARTED';
const GET_SYNC_COMPLETED = 'GET_SYNC_COMPLETED';
const SET_SYNC_STARTED = 'SET_SYNC_STARTED';
const SET_SYNC_FAILED = 'SET_SYNC_FAILED';
const SET_SYNC_COMPLETED = 'SET_SYNC_COMPLETED';
const SET_DEFAULT_ACCOUNT = 'SET_DEFAULT_ACCOUNT'; // Likes

const LIKE_ON_CLICK = 'LIKE_ON_CLICK';
const LIKE_COUNT = 'LIKE_COUNT';
const LIKE_CHECK = 'LIKE_CHECK';
const DISLIKE_ON_CLICK = 'DISLIKE_ON_CLICK';
const FETCH_LIKED_LIST = 'FETCH_LIKED_LIST'; // Views

const REG_VIEW = 'REG_VIEW';
const VIEW_COUNTER = 'REG_COUNTER'; // Playlist - Default Watch Later

const FETCH_PLAYLIST = 'FETCH_PLAYLIST';
const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST';
const REMOVE_FROM_PLAYLIST = 'REMOVE_FROM_PLAYLIST'; // Category List

const FETCH_CATEGORY_LIST = 'FETCH_CATEGORY_LIST'; // User History

const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
const FETCH_HISTORY = 'FETCH_HISTORY';
const DELETE_HISTORY = 'DELETE_HISTORY';
const DELETE_ALL_HISTORY = 'DELETE_ALL_HISTORY'; // Search Queries

const AUTOCOMPLETE_SEARCH_QUERY = 'AUTOCOMPLETE_SEARCH_QUERY';
const SEARCH_QUERY_RESULT = 'SEARCH_QUERY_RESULT';
const SEARCH_QUERY_FILTERS = 'SEARCH_QUERY_FILTERS';
const SEARCH_FILTER_VISIBLE = 'SEARCH_FILTER_VISIBLE'; // Report

const USER_REPORT_SUCCESS = 'USER_REPORT_SUCCESS'; // Category

const FETCH_CONTENT_CATEGORY = 'FETCH_CONTENT_CATEGORY';
const FETCH_RECENT_LIST = 'FETCH_RECENT_LIST'; // User Profile

const USER_PROFILE_SAVE = 'USER_PROFILE_SAVE';
const USER_PROFILE_UPDATE = 'USER_PROFILE_UPDATE';
const USER_PROFILE_FETCH = 'USER_PROFILE_FETCH'; // User Help &  Feedback

const SAVE_USER_HELP = 'SAVE_USER_HELP';
const SAVE_USER_FEEDBACK = 'SAVE_USER_FEEDBACK'; // Not Interested

const FETCH_NOT_INTERESTED_LIST = 'FETCH_NOT_INTERESTED_LIST';
const NOT_INTERESTED_CONTENT = 'NOT_INTERESTED_CONTENT'; // Notifications

const NOTIFICATION_REGISTER = 'NOTIFICATION_REGISTER';
const NOTIFICATION_CALLBACK = 'NOTIFICATION_CALLBACK';

var action_types = /*#__PURE__*/Object.freeze({
  GENERATE_AUTH_TOKEN_FAILURE: GENERATE_AUTH_TOKEN_FAILURE,
  GENERATE_AUTH_TOKEN_STARTED: GENERATE_AUTH_TOKEN_STARTED,
  GENERATE_AUTH_TOKEN_SUCCESS: GENERATE_AUTH_TOKEN_SUCCESS,
  FETCH_FEATURED_CONTENT_STARTED: FETCH_FEATURED_CONTENT_STARTED,
  FETCH_FEATURED_CONTENT_COMPLETED: FETCH_FEATURED_CONTENT_COMPLETED,
  FETCH_TRENDING_CONTENT_STARTED: FETCH_TRENDING_CONTENT_STARTED,
  FETCH_TRENDING_CONTENT_COMPLETED: FETCH_TRENDING_CONTENT_COMPLETED,
  RESOLVE_URIS_STARTED: RESOLVE_URIS_STARTED,
  RESOLVE_URIS_COMPLETED: RESOLVE_URIS_COMPLETED,
  FETCH_CHANNEL_CLAIMS_STARTED: FETCH_CHANNEL_CLAIMS_STARTED,
  FETCH_CHANNEL_CLAIMS_COMPLETED: FETCH_CHANNEL_CLAIMS_COMPLETED,
  FETCH_CHANNEL_CLAIM_COUNT_STARTED: FETCH_CHANNEL_CLAIM_COUNT_STARTED,
  FETCH_CHANNEL_CLAIM_COUNT_COMPLETED: FETCH_CHANNEL_CLAIM_COUNT_COMPLETED,
  FETCH_CLAIM_LIST_MINE_STARTED: FETCH_CLAIM_LIST_MINE_STARTED,
  FETCH_CLAIM_LIST_MINE_COMPLETED: FETCH_CLAIM_LIST_MINE_COMPLETED,
  ABANDON_CLAIM_STARTED: ABANDON_CLAIM_STARTED,
  ABANDON_CLAIM_SUCCEEDED: ABANDON_CLAIM_SUCCEEDED,
  FETCH_CHANNEL_LIST_STARTED: FETCH_CHANNEL_LIST_STARTED,
  FETCH_CHANNEL_LIST_COMPLETED: FETCH_CHANNEL_LIST_COMPLETED,
  CREATE_CHANNEL_STARTED: CREATE_CHANNEL_STARTED,
  CREATE_CHANNEL_COMPLETED: CREATE_CHANNEL_COMPLETED,
  PUBLISH_STARTED: PUBLISH_STARTED,
  PUBLISH_COMPLETED: PUBLISH_COMPLETED,
  PUBLISH_FAILED: PUBLISH_FAILED,
  SET_PLAYING_URI: SET_PLAYING_URI,
  SET_CONTENT_POSITION: SET_CONTENT_POSITION,
  SET_CONTENT_LAST_VIEWED: SET_CONTENT_LAST_VIEWED,
  CLEAR_CONTENT_HISTORY_URI: CLEAR_CONTENT_HISTORY_URI,
  CLEAR_CONTENT_HISTORY_ALL: CLEAR_CONTENT_HISTORY_ALL,
  CHANNEL_SUBSCRIBE: CHANNEL_SUBSCRIBE,
  CHANNEL_UNSUBSCRIBE: CHANNEL_UNSUBSCRIBE,
  CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS: CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS,
  CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS: CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS,
  HAS_FETCHED_SUBSCRIPTIONS: HAS_FETCHED_SUBSCRIPTIONS,
  SET_SUBSCRIPTION_LATEST: SET_SUBSCRIPTION_LATEST,
  UPDATE_SUBSCRIPTION_UNREADS: UPDATE_SUBSCRIPTION_UNREADS,
  REMOVE_SUBSCRIPTION_UNREADS: REMOVE_SUBSCRIPTION_UNREADS,
  CHECK_SUBSCRIPTION_STARTED: CHECK_SUBSCRIPTION_STARTED,
  CHECK_SUBSCRIPTION_COMPLETED: CHECK_SUBSCRIPTION_COMPLETED,
  CHECK_SUBSCRIPTIONS_SUBSCRIBE: CHECK_SUBSCRIPTIONS_SUBSCRIBE,
  FETCH_SUBSCRIPTIONS_START: FETCH_SUBSCRIPTIONS_START,
  FETCH_SUBSCRIPTIONS_FAIL: FETCH_SUBSCRIPTIONS_FAIL,
  FETCH_SUBSCRIPTIONS_SUCCESS: FETCH_SUBSCRIPTIONS_SUCCESS,
  SET_VIEW_MODE: SET_VIEW_MODE,
  GET_SUGGESTED_SUBSCRIPTIONS_START: GET_SUGGESTED_SUBSCRIPTIONS_START,
  GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS: GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS,
  GET_SUGGESTED_SUBSCRIPTIONS_FAIL: GET_SUGGESTED_SUBSCRIPTIONS_FAIL,
  SUBSCRIPTION_FIRST_RUN_COMPLETED: SUBSCRIPTION_FIRST_RUN_COMPLETED,
  VIEW_SUGGESTED_SUBSCRIPTIONS: VIEW_SUGGESTED_SUBSCRIPTIONS,
  FETCH_SUBSCRIPTION_COUNT: FETCH_SUBSCRIPTION_COUNT,
  FETCH_BLACK_LISTED_CONTENT_STARTED: FETCH_BLACK_LISTED_CONTENT_STARTED,
  FETCH_BLACK_LISTED_CONTENT_COMPLETED: FETCH_BLACK_LISTED_CONTENT_COMPLETED,
  FETCH_BLACK_LISTED_CONTENT_FAILED: FETCH_BLACK_LISTED_CONTENT_FAILED,
  BLACK_LISTED_CONTENT_SUBSCRIBE: BLACK_LISTED_CONTENT_SUBSCRIBE,
  FETCH_COST_INFO_STARTED: FETCH_COST_INFO_STARTED,
  FETCH_COST_INFO_COMPLETED: FETCH_COST_INFO_COMPLETED,
  FETCH_VIEW_COUNT_STARTED: FETCH_VIEW_COUNT_STARTED,
  FETCH_VIEW_COUNT_FAILED: FETCH_VIEW_COUNT_FAILED,
  FETCH_VIEW_COUNT_COMPLETED: FETCH_VIEW_COUNT_COMPLETED,
  GET_SYNC_STARTED: GET_SYNC_STARTED,
  GET_SYNC_COMPLETED: GET_SYNC_COMPLETED,
  SET_SYNC_STARTED: SET_SYNC_STARTED,
  SET_SYNC_FAILED: SET_SYNC_FAILED,
  SET_SYNC_COMPLETED: SET_SYNC_COMPLETED,
  SET_DEFAULT_ACCOUNT: SET_DEFAULT_ACCOUNT,
  LIKE_ON_CLICK: LIKE_ON_CLICK,
  LIKE_COUNT: LIKE_COUNT,
  LIKE_CHECK: LIKE_CHECK,
  DISLIKE_ON_CLICK: DISLIKE_ON_CLICK,
  FETCH_LIKED_LIST: FETCH_LIKED_LIST,
  REG_VIEW: REG_VIEW,
  VIEW_COUNTER: VIEW_COUNTER,
  FETCH_PLAYLIST: FETCH_PLAYLIST,
  ADD_TO_PLAYLIST: ADD_TO_PLAYLIST,
  REMOVE_FROM_PLAYLIST: REMOVE_FROM_PLAYLIST,
  FETCH_CATEGORY_LIST: FETCH_CATEGORY_LIST,
  ADD_TO_HISTORY: ADD_TO_HISTORY,
  FETCH_HISTORY: FETCH_HISTORY,
  DELETE_HISTORY: DELETE_HISTORY,
  DELETE_ALL_HISTORY: DELETE_ALL_HISTORY,
  AUTOCOMPLETE_SEARCH_QUERY: AUTOCOMPLETE_SEARCH_QUERY,
  SEARCH_QUERY_RESULT: SEARCH_QUERY_RESULT,
  SEARCH_QUERY_FILTERS: SEARCH_QUERY_FILTERS,
  SEARCH_FILTER_VISIBLE: SEARCH_FILTER_VISIBLE,
  USER_REPORT_SUCCESS: USER_REPORT_SUCCESS,
  FETCH_CONTENT_CATEGORY: FETCH_CONTENT_CATEGORY,
  FETCH_RECENT_LIST: FETCH_RECENT_LIST,
  USER_PROFILE_SAVE: USER_PROFILE_SAVE,
  USER_PROFILE_UPDATE: USER_PROFILE_UPDATE,
  USER_PROFILE_FETCH: USER_PROFILE_FETCH,
  SAVE_USER_HELP: SAVE_USER_HELP,
  SAVE_USER_FEEDBACK: SAVE_USER_FEEDBACK,
  FETCH_NOT_INTERESTED_LIST: FETCH_NOT_INTERESTED_LIST,
  NOT_INTERESTED_CONTENT: NOT_INTERESTED_CONTENT,
  NOTIFICATION_REGISTER: NOTIFICATION_REGISTER,
  NOTIFICATION_CALLBACK: NOTIFICATION_CALLBACK
});

const Lbryio = {
  enabled: true,
  authenticationPromise: null,
  exchangePromise: null,
  exchangeLastFetched: null,
  CONNECTION_STRING: 'http://13.232.221.124:3000/'
};
const EXCHANGE_RATE_TIMEOUT = 20 * 60 * 1000; // We can't use env's because they aren't passed into node_modules

Lbryio.setLocalApi = endpoint => {
  Lbryio.CONNECTION_STRING = endpoint.replace(/\/*$/, '/'); // exactly one slash at the end;
};

Lbryio.call = (resource, action, params = {}, method = 'get') => {
  if (!Lbryio.enabled) {
    return Promise.reject(new Error(__('LBRY internal API is disabled')));
  }

  if (!(method === 'get' || method === 'post')) {
    return Promise.reject(new Error(__('Invalid method')));
  }

  function checkAndParse(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }

    return response.json().then(json => {
      let error;

      if (json.error) {
        error = new Error(json.error);
      } else {
        error = new Error('Unknown API error signature');
      }

      error.response = response; // This is primarily a hack used in actions/user.js

      return Promise.reject(error);
    });
  }

  function makeRequest(url, options) {
    return fetch(url, options).then(checkAndParse);
  }

  return Lbryio.getAuthToken().then(token => {
    const fullParams = {
      auth_token: token,
      ...params
    };
    const qs = querystring.stringify(fullParams);
    let url = `${Lbryio.CONNECTION_STRING}${resource}/${action}?${qs}`;
    let options = {
      method: 'GET'
    };

    if (method === 'post') {
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: qs
      };
      url = `${Lbryio.CONNECTION_STRING}${resource}/${action}`;
    }

    return makeRequest(url, options).then(response => response.data);
  });
};

Lbryio.authToken = null;

Lbryio.getAuthToken = () => new Promise(resolve => {
  if (Lbryio.authToken) {
    resolve(Lbryio.authToken);
  } else if (Lbryio.overrides.getAuthToken) {
    Lbryio.overrides.getAuthToken().then(token => {
      resolve(token);
    });
  } else {
    const {
      store
    } = window;

    if (store) {
      const state = store.getState();
      const token = state.auth ? state.auth.authToken : null;
      Lbryio.authToken = token;
      resolve(token);
    }

    resolve(null);
  }
});

Lbryio.getCurrentUser = () => Lbryio.call('user', 'me').then(user => {
  if (user) return Promise.resolve(user);
  return Promise.resolve({
    id: null,
    language: 'en',
    primary_email: null,
    has_verified_email: false,
    is_identity_verified: false,
    is_reward_approved: false
  });
});

Lbryio.authenticate = () => {
  if (!Lbryio.enabled) {
    return new Promise(resolve => {
      resolve({
        id: 1,
        language: 'en',
        primary_email: 'disabled@lbry.io',
        has_verified_email: true,
        is_identity_verified: true,
        is_reward_approved: false
      });
    });
  }

  if (Lbryio.authenticationPromise === null) {
    Lbryio.authenticationPromise = new Promise((resolve, reject) => {
      Lbryio.getAuthToken().then(token => {
        if (!token || token.length > 60) {
          return false;
        } // check that token works


        return Lbryio.getCurrentUser().then(user => user).catch(() => false);
      }).then(user => {
        if (user) {
          return user;
        }

        return ACTIONS.Lbry.status().then(status => {
          if (Lbryio.overrides.setAuthToken) {
            return Lbryio.overrides.setAuthToken(status);
          } // simply call the logic to create a new user, and obtain the auth token


          return new Promise((res, rej) => {
            Lbryio.call('user', 'new', {
              auth_token: '',
              language: 'en',
              app_id: status.installation_id
            }, 'post').then(response => {
              if (!response.auth_token) {
                throw new Error('auth_token was not set in the response');
              }

              const {
                store
              } = window;

              if (store) {
                store.dispatch({
                  type: GENERATE_AUTH_TOKEN_SUCCESS,
                  data: {
                    authToken: response.auth_token
                  }
                });
              }

              Lbryio.authToken = response.auth_token;
              res(response);
            }).catch(error => rej(error));
          });
        });
      }).then(user => {
        if (!user) {
          return Lbryio.getCurrentUser();
        }

        return user;
      }).then(resolve, reject);
    });
  }

  return Lbryio.authenticationPromise;
};

Lbryio.getStripeToken = () => Lbryio.CONNECTION_STRING.startsWith('http://localhost:') ? 'pk_test_NoL1JWL7i1ipfhVId5KfDZgo' : 'pk_live_e8M4dRNnCCbmpZzduEUZBgJO';

Lbryio.getExchangeRates = () => {
  if (!Lbryio.exchangeLastFetched || Date.now() - Lbryio.exchangeLastFetched > EXCHANGE_RATE_TIMEOUT) {
    Lbryio.exchangePromise = new Promise((resolve, reject) => {
      Lbryio.call('lbc', 'exchange_rate', {}, 'get', true).then(({
        lbc_usd: LBC_USD,
        lbc_btc: LBC_BTC,
        btc_usd: BTC_USD
      }) => {
        const rates = {
          LBC_USD,
          LBC_BTC,
          BTC_USD
        };
        resolve(rates);
      }).catch(reject);
    });
    Lbryio.exchangeLastFetched = Date.now();
  }

  return Lbryio.exchangePromise;
}; // Allow overriding lbryio methods
// The desktop app will need to use it for getAuthToken because we use electron's ipcRenderer


Lbryio.overrides = {};

Lbryio.setOverride = (methodName, newMethod) => {
  Lbryio.overrides[methodName] = newMethod;
};

const rewards = {};
rewards.TYPE_NEW_DEVELOPER = 'new_developer';
rewards.TYPE_NEW_USER = 'new_user';
rewards.TYPE_CONFIRM_EMAIL = 'verified_email';
rewards.TYPE_FIRST_CHANNEL = 'new_channel';
rewards.TYPE_FIRST_STREAM = 'first_stream';
rewards.TYPE_MANY_DOWNLOADS = 'many_downloads';
rewards.TYPE_FIRST_PUBLISH = 'first_publish';
rewards.TYPE_FEATURED_DOWNLOAD = 'featured_download';
rewards.TYPE_REFERRAL = 'referral';
rewards.TYPE_REWARD_CODE = 'reward_code';
rewards.TYPE_SUBSCRIPTION = 'subscription';
rewards.YOUTUBE_CREATOR = 'youtube_creator';

rewards.claimReward = (type, rewardParams) => {
  function requestReward(resolve, reject, params) {
    if (!Lbryio.enabled) {
      reject(new Error(__('Rewards are not enabled.')));
      return;
    }

    Lbryio.call('reward', 'new', params, 'post').then(reward => {
      const message = reward.reward_notification || `You have claimed a ${reward.reward_amount} LBC reward.`; // Display global notice

      const action = ACTIONS.doToast({
        message,
        linkText: __('Show All'),
        linkTarget: '/rewards'
      });
      window.store.dispatch(action);

      if (rewards.callbacks.claimRewardSuccess) {
        rewards.callbacks.claimRewardSuccess();
      }

      resolve(reward);
    }, reject);
  }

  return new Promise((resolve, reject) => {
    ACTIONS.Lbry.address_unused().then(address => {
      const params = {
        reward_type: type,
        wallet_address: address,
        ...rewardParams
      };

      switch (type) {
        case rewards.TYPE_FIRST_CHANNEL:
          ACTIONS.Lbry.claim_list().then(claims => {
            const claim = claims.find(foundClaim => foundClaim.name.length && foundClaim.name[0] === '@' && foundClaim.txid.length && foundClaim.type === 'claim');

            if (claim) {
              params.transaction_id = claim.txid;
              requestReward(resolve, reject, params);
            } else {
              reject(new Error(__('Please create a channel identity first.')));
            }
          }).catch(reject);
          break;

        case rewards.TYPE_FIRST_PUBLISH:
          ACTIONS.Lbry.claim_list().then(claims => {
            const claim = claims.find(foundClaim => foundClaim.name.length && foundClaim.name[0] !== '@' && foundClaim.txid.length && foundClaim.type === 'claim');

            if (claim) {
              params.transaction_id = claim.txid;
              requestReward(resolve, reject, params);
            } else {
              reject(claims.length ? new Error(__('Please publish something and wait for confirmation by the network to claim this reward.')) : new Error(__('Please publish something to claim this reward.')));
            }
          }).catch(reject);
          break;

        case rewards.TYPE_FIRST_STREAM:
        case rewards.TYPE_NEW_USER:
        default:
          requestReward(resolve, reject, params);
      }
    });
  });
};

rewards.callbacks = {
  // Set any callbacks that require code not found in this project
  claimRewardSuccess: null,
  claimFirstRewardSuccess: null,
  rewardApprovalRequired: null
};

rewards.setCallback = (name, method) => {
  rewards.callbacks[name] = method;
};

const VIEW_ALL = 'view_all';

const DOWNLOADING = 'DOWNLOADING';
const NOTIFY_ONLY = 'NOTIFY_ONLY;'; // Suggested types
const SUGGESTED_TOP_SUBSCRIBED = 'top_subscribed';
const SUGGESTED_FEATURED = 'featured';

// util for creating reducers
// based off of redux-actions
// https://redux-actions.js.org/docs/api/handleAction.html#handleactions
// eslint-disable-next-line import/prefer-default-export
const handleActions = (actionMap, defaultState) => (state = defaultState, action) => {
  const handler = actionMap[action.type];

  if (handler) {
    const newState = handler(state, action);
    return Object.assign({}, state, newState);
  } // just return the original state if no handler
  // returning a copy here breaks redux-persist


  return state;
};

//      
const defaultState = {
  enabledChannelNotifications: [],
  subscriptions: [],
  unread: {},
  suggested: {},
  loading: false,
  viewMode: VIEW_ALL,
  loadingSuggested: false,
  firstRunCompleted: false,
  showSuggestedSubs: false,
  subscriptionCount: 0
};
var subscriptions = handleActions({
  [CHANNEL_SUBSCRIBE]: (state, action) => {
    const newSubscription = action.data;
    const newSubscriptions = state.subscriptions.slice();
    newSubscriptions.unshift(newSubscription);
    return { ...state,
      subscriptions: newSubscriptions
    };
  },
  [CHANNEL_UNSUBSCRIBE]: (state, action) => {
    const subscriptionToRemove = action.data;
    const newSubscriptions = state.subscriptions.slice().filter(subscription => subscription.channelName !== subscriptionToRemove.channelName); // Check if we need to remove it from the 'unread' state

    const {
      unread
    } = state;

    if (unread[subscriptionToRemove.uri]) {
      delete unread[subscriptionToRemove.uri];
    }

    return { ...state,
      unread: { ...unread
      },
      subscriptions: newSubscriptions
    };
  },
  [SET_SUBSCRIPTION_LATEST]: (state, action) => ({ ...state,
    subscriptions: state.subscriptions.map(subscription => subscription.channelName === action.data.subscription.channelName ? { ...subscription,
      latest: action.data.uri
    } : subscription)
  }),
  [UPDATE_SUBSCRIPTION_UNREADS]: (state, action) => {
    const {
      channel,
      uris,
      type
    } = action.data;
    return { ...state,
      unread: { ...state.unread,
        [channel]: {
          uris,
          type
        }
      }
    };
  },
  [REMOVE_SUBSCRIPTION_UNREADS]: (state, action) => {
    const {
      channel,
      uris
    } = action.data; // If no channel is passed in, remove all unreads

    let newUnread;

    if (channel) {
      newUnread = { ...state.unread
      };

      if (!uris) {
        delete newUnread[channel];
      } else {
        newUnread[channel].uris = uris;
      }
    } else {
      newUnread = {};
    }

    return { ...state,
      unread: { ...newUnread
      }
    };
  },
  [CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS]: (state, action) => {
    const channelName = action.data;
    const newEnabledChannelNotifications = state.enabledChannelNotifications.slice();

    if (channelName && channelName.trim().length > 0 && newEnabledChannelNotifications.indexOf(channelName) === -1) {
      newEnabledChannelNotifications.push(channelName);
    }

    return { ...state,
      enabledChannelNotifications: newEnabledChannelNotifications
    };
  },
  [CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS]: (state, action) => {
    const channelName = action.data;
    const newEnabledChannelNotifications = state.enabledChannelNotifications.slice();
    const index = newEnabledChannelNotifications.indexOf(channelName);

    if (index > -1) {
      newEnabledChannelNotifications.splice(index, 1);
    }

    return { ...state,
      enabledChannelNotifications: newEnabledChannelNotifications
    };
  },
  [FETCH_SUBSCRIPTIONS_START]: state => ({ ...state,
    loading: true
  }),
  [FETCH_SUBSCRIPTIONS_FAIL]: state => ({ ...state,
    loading: false
  }),
  [FETCH_SUBSCRIPTIONS_SUCCESS]: (state, action) => ({ ...state,
    loading: false,
    subscriptions: action.data
  }),
  [SET_VIEW_MODE]: (state, action) => ({ ...state,
    viewMode: action.data
  }),
  [GET_SUGGESTED_SUBSCRIPTIONS_START]: state => ({ ...state,
    loadingSuggested: true
  }),
  [GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS]: (state, action) => ({ ...state,
    suggested: action.data,
    loadingSuggested: false
  }),
  [GET_SUGGESTED_SUBSCRIPTIONS_FAIL]: state => ({ ...state,
    loadingSuggested: false
  }),
  [SUBSCRIPTION_FIRST_RUN_COMPLETED]: state => ({ ...state,
    firstRunCompleted: true
  }),
  [VIEW_SUGGESTED_SUBSCRIPTIONS]: state => ({ ...state,
    showSuggestedSubs: true
  }),
  [FETCH_SUBSCRIPTION_COUNT]: (state, action) => {
    const {
      subscriptionCount
    } = action.data;
    return { ...state,
      subscriptionCount
    };
  }
}, defaultState);

function doGenerateAuthToken(installationId) {
  return dispatch => {
    dispatch({
      type: GENERATE_AUTH_TOKEN_STARTED
    });
    Lbryio.call('user', 'new', {
      auth_token: '',
      language: 'en',
      app_id: installationId
    }, 'post').then(response => {
      if (!response.auth_token) {
        dispatch({
          type: GENERATE_AUTH_TOKEN_FAILURE
        });
      } else {
        dispatch({
          type: GENERATE_AUTH_TOKEN_SUCCESS,
          data: {
            authToken: response.auth_token
          }
        });
      }
    }).catch(() => {
      dispatch({
        type: GENERATE_AUTH_TOKEN_FAILURE
      });
    });
  };
}

const selectState = state => state.rewards || {};

const selectUnclaimedRewardsByType = reselect.createSelector(selectState, state => state.unclaimedRewardsByType);
const selectClaimedRewardsById = reselect.createSelector(selectState, state => state.claimedRewardsById);
const selectClaimedRewards = reselect.createSelector(selectClaimedRewardsById, byId => Object.values(byId) || []);
const selectClaimedRewardsByTransactionId = reselect.createSelector(selectClaimedRewards, rewards => rewards.reduce((mapParam, reward) => {
  const map = mapParam;
  map[reward.transaction_id] = reward;
  return map;
}, {}));
const selectUnclaimedRewards = reselect.createSelector(selectState, state => state.unclaimedRewards);
const selectFetchingRewards = reselect.createSelector(selectState, state => !!state.fetching);
const selectUnclaimedRewardValue = reselect.createSelector(selectUnclaimedRewards, rewards => rewards.reduce((sum, reward) => sum + reward.reward_amount, 0));
const selectClaimsPendingByType = reselect.createSelector(selectState, state => state.claimPendingByType);

const selectIsClaimRewardPending = (state, props) => selectClaimsPendingByType(state, props)[props.reward_type];

const makeSelectIsRewardClaimPending = () => reselect.createSelector(selectIsClaimRewardPending, isClaiming => isClaiming);
const selectClaimErrorsByType = reselect.createSelector(selectState, state => state.claimErrorsByType);

const selectClaimRewardError = (state, props) => selectClaimErrorsByType(state, props)[props.reward_type];

const makeSelectClaimRewardError = () => reselect.createSelector(selectClaimRewardError, errorMessage => errorMessage);

const selectRewardByType = (state, rewardType) => selectUnclaimedRewards(state).find(reward => reward.reward_type === rewardType);

const makeSelectRewardByType = () => reselect.createSelector(selectRewardByType, reward => reward);
const makeSelectRewardAmountByType = () => reselect.createSelector(selectRewardByType, reward => reward ? reward.reward_amount : 0);
const selectRewardContentClaimIds = reselect.createSelector(selectState, state => state.rewardedContentClaimIds);
const selectReferralReward = reselect.createSelector(selectUnclaimedRewards, unclaimedRewards => unclaimedRewards.filter(reward => reward.reward_type === rewards.TYPE_REFERRAL)[0]);

const selectState$1 = state => state.user || {};
const selectAuthenticationIsPending = reselect.createSelector(selectState$1, state => state.authenticationIsPending);
const selectUserIsPending = reselect.createSelector(selectState$1, state => state.userIsPending);
const selectUser = reselect.createSelector(selectState$1, state => state.user);
const selectUserEmail = reselect.createSelector(selectUser, user => user ? user.primary_email : null);
const selectUserPhone = reselect.createSelector(selectUser, user => user ? user.mobileNo : null);
const selectUserCheckId = reselect.createSelector(selectState$1, state => state.isNewUser);
const selectUserEmailLogin = reselect.createSelector(selectState$1, state => state.isLoggedIn);
const selectUserCheckType = reselect.createSelector(selectState$1, state => state.inputType);
const selectUserCheckValue = reselect.createSelector(selectState$1, state => state.input); // export const selectUserCountryCode = createSelector(
//   selectUser,
//   user => (user ? user.country_code : null)
// );

const selectEmailToVerify = reselect.createSelector(selectState$1, selectUserEmail, (state, userEmail) => state.emailToVerify || userEmail);
const selectPhoneToVerify = reselect.createSelector(selectState$1, state => state.input);
const selectUserIsRewardApproved = reselect.createSelector(selectUser, user => user && user.is_reward_approved);
const selectEmailNewIsPending = reselect.createSelector(selectState$1, state => state.emailNewIsPending);
const selectUserLoggedOut = reselect.createSelector(selectState$1, state => state.isLoggedIn);
const selectEmailNewErrorMessage = reselect.createSelector(selectState$1, state => state.emailNewErrorMessage);
const selectPhoneNewErrorMessage = reselect.createSelector(selectState$1, state => state.phoneNewErrorMessage);
const selectEmailVerifyIsPending = reselect.createSelector(selectState$1, state => state.emailVerifyIsPending);
const selectEmailVerifyErrorMessage = reselect.createSelector(selectState$1, state => state.emailVerifyErrorMessage);
const selectPhoneNewIsPending = reselect.createSelector(selectState$1, state => state.phoneNewIsPending && state.otpSent);
const selectPhoneVerifyIsPending = reselect.createSelector(selectState$1, state => state.phoneVerifyIsPending);
const selectPhoneVerifyErrorMessage = reselect.createSelector(selectState$1, state => state.phoneVerifyErrorMessage);
const selectUserReport = reselect.createSelector(selectState$1, state => state.claim_id && state.report_type);
const selectIdentityVerifyIsPending = reselect.createSelector(selectState$1, state => state.identityVerifyIsPending);
const selectIdentityVerifyErrorMessage = reselect.createSelector(selectState$1, state => state.identityVerifyErrorMessage);
const selectUserIsVerificationCandidate = reselect.createSelector(selectUser, user => user && (!user.has_verified_email || !user.is_identity_verified));
const selectAccessToken = reselect.createSelector(selectState$1, state => state.accessToken);
const selectUserInviteStatusIsPending = reselect.createSelector(selectState$1, state => state.inviteStatusIsPending);
const selectUserInvitesRemaining = reselect.createSelector(selectState$1, state => state.invitesRemaining);
const selectUserInvitees = reselect.createSelector(selectState$1, state => state.invitees);
const selectUserInviteStatusFailed = reselect.createSelector(selectUserInvitesRemaining, () => selectUserInvitesRemaining === null);
const selectUserInviteNewIsPending = reselect.createSelector(selectState$1, state => state.inviteNewIsPending);
const selectUserInviteNewErrorMessage = reselect.createSelector(selectState$1, state => state.inviteNewErrorMessage);
const selectUserInviteReferralLink = reselect.createSelector(selectState$1, state => state.referralLink);
const selectSavedUserData = reselect.createSelector(selectState$1, state => state.profileData);
const selectUserNotificationData = reselect.createSelector(selectState$1, state => state.notificationData);
const selectUserNotificationCallbackData = reselect.createSelector(selectState$1, state => state.notificationCallbackData);
const selectUpdatedUserData = reselect.createSelector(selectState$1, state => state.name && state.dob && state.gender && state.description);
const selectHelpResponse = reselect.createSelector(selectState$1, state => state.response);
const selectFeedbackResponse = reselect.createSelector(selectState$1, state => state.response);
const selectFilteredSearchList = reselect.createSelector(selectState$1, state => state.filteredSearchList);
const selectFilterResultsVisible = reselect.createSelector(selectState$1, state => state.filterResultsVisible);

function doFetchFeaturedUris(offloadResolve = false) {
  return dispatch => {
    dispatch({
      type: FETCH_FEATURED_CONTENT_STARTED
    });

    const success = ({
      Uris
    }) => {
      let urisToResolve = [];
      Object.keys(Uris).forEach(category => {
        urisToResolve = [...urisToResolve, ...Uris[category]];
      });
      const actions = [{
        type: FETCH_FEATURED_CONTENT_COMPLETED,
        data: {
          uris: Uris,
          success: true
        }
      }];

      if (urisToResolve.length && !offloadResolve) {
        actions.push(ACTIONS.doResolveUris(urisToResolve));
      }

      dispatch(ACTIONS.batchActions(...actions));
    };

    const failure = () => {
      dispatch({
        type: FETCH_FEATURED_CONTENT_COMPLETED,
        data: {
          uris: {}
        }
      });
    };

    Lbryio.call('file', 'list_homepage').then(success, failure);
  };
}
function doFetchTrendingUris() {
  return dispatch => {
    dispatch({
      type: FETCH_TRENDING_CONTENT_STARTED
    });

    const success = data => {
      const urisToResolve = data.map(uri => uri.url);
      const actions = [ACTIONS.doResolveUris(urisToResolve), {
        type: FETCH_TRENDING_CONTENT_COMPLETED,
        data: {
          uris: data,
          success: true
        }
      }];
      dispatch(ACTIONS.batchActions(...actions));
    };

    const failure = () => {
      dispatch({
        type: FETCH_TRENDING_CONTENT_COMPLETED,
        data: {
          uris: []
        }
      });
    };

    Lbryio.call('file', 'list_trending').then(success, failure);
  };
} // eslint-disable-next-line camelcase

function doFetchContentCategory(content_category) {
  return dispatch => {
    Lbryio.call('file', 'fetchContentCategory', {
      content_category
    }, 'post').then(data => {
      dispatch({
        type: FETCH_CONTENT_CATEGORY,
        data: {
          uris: data
        }
      });
    });
  };
}
function doFetchRecentList() {
  return dispatch => {
    Lbryio.call('file', 'recent_list').then(data => {
      dispatch({
        type: FETCH_RECENT_LIST,
        data
      });
    });
  };
}
function doFetchNotInterestedList() {
  return dispatch => {
    Lbryio.call('file', 'not_interested_list').then(data => {
      dispatch({
        type: FETCH_NOT_INTERESTED_LIST,
        data: {
          data
        }
      });
    });
  };
} // eslint-disable-next-line camelcase

function doNotInterested(claim_id) {
  return dispatch => {
    Lbryio.call('file', 'not_interested', {
      claim_id
    }, 'post').then(data => {
      dispatch({
        type: NOT_INTERESTED_CONTENT,
        data
      });
    });
  };
}

function doFetchInviteStatus() {
  return dispatch => {
    dispatch({
      type: ACTIONS.ACTIONS.USER_INVITE_STATUS_FETCH_STARTED
    });
    Promise.all([Lbryio.call('user', 'invite_status'), Lbryio.call('user_referral_code', 'list')]).then(([status, code]) => {
      dispatch(doRewardList());
      dispatch({
        type: ACTIONS.ACTIONS.USER_INVITE_STATUS_FETCH_SUCCESS,
        data: {
          invitesRemaining: status.invites_remaining ? status.invites_remaining : 0,
          invitees: status.invitees,
          referralLink: `${Lbryio.CONNECTION_STRING}user/refer?r=${code}`
        }
      });
    }).catch(error => {
      dispatch({
        type: ACTIONS.ACTIONS.USER_INVITE_STATUS_FETCH_FAILURE,
        data: {
          error
        }
      });
    });
  };
}
function doInstallNew(appVersion, os = null) {
  const payload = {
    app_version: appVersion
  };
  ACTIONS.Lbry.status().then(status => {
    payload.app_id = status.installation_id;
    payload.node_id = status.lbry_id;
    ACTIONS.Lbry.version().then(version => {
      payload.daemon_version = version.lbrynet_version;
      payload.operating_system = os || version.os_system;
      payload.platform = version.platform;
      Lbryio.call('install', 'new', payload);
    });
  });
} // TODO: Call doInstallNew separately so we don't have to pass appVersion and os_system params?

function doAuthenticate() {
  return dispatch => {
    dispatch({
      type: ACTIONS.ACTIONS.AUTHENTICATION_STARTED
    });
    Lbryio.authenticate().then(user => {
      // analytics.setUser(user);
      dispatch({
        type: ACTIONS.ACTIONS.AUTHENTICATION_SUCCESS,
        data: {
          user
        }
      });
    }).catch(error => {
      dispatch({
        type: ACTIONS.ACTIONS.AUTHENTICATION_FAILURE,
        data: {
          error
        }
      });
    });
  };
}
function doUserFetch() {
  return dispatch => {
    dispatch({
      type: ACTIONS.ACTIONS.USER_FETCH_STARTED
    });
    Lbryio.getCurrentUser().then(user => {
      // analytics.setUser(user);
      dispatch(doRewardList());
      dispatch({
        type: ACTIONS.ACTIONS.USER_FETCH_SUCCESS,
        data: {
          user
        }
      });
    }).catch(error => {
      dispatch({
        type: ACTIONS.ACTIONS.USER_FETCH_FAILURE,
        data: {
          error
        }
      });
    });
  };
}
function doUserCheckEmailVerified() {
  // This will happen in the background so we don't need loading booleans
  return dispatch => {
    Lbryio.getCurrentUser().then(user => {
      if (user.has_verified_email) {
        dispatch(doRewardList());
        dispatch({
          type: ACTIONS.ACTIONS.USER_FETCH_SUCCESS,
          data: {
            user
          }
        });
      }
    });
  };
}
function doUserPhoneReset() {
  return {
    type: ACTIONS.ACTIONS.USER_PHONE_RESET
  };
}
function doUserPhoneNew(phone, countryCode) {
  return dispatch => {
    dispatch({
      type: ACTIONS.ACTIONS.USER_PHONE_NEW_STARTED,
      data: {
        phone,
        country_code: countryCode
      }
    });

    const success = () => {
      dispatch({
        type: ACTIONS.ACTIONS.USER_PHONE_NEW_SUCCESS,
        data: {
          phone
        }
      });
    };

    const failure = error => {
      dispatch({
        type: ACTIONS.ACTIONS.USER_PHONE_NEW_FAILURE,
        data: {
          error
        }
      });
    };

    Lbryio.call('user_mobile', 'new', {
      mobileNo: phone
    }, 'post').then(success, failure);
  };
}
function doUserPhoneVerifyFailure(error) {
  return {
    type: ACTIONS.ACTIONS.USER_PHONE_VERIFY_FAILURE,
    data: {
      error
    }
  };
}
function doUserPhoneVerify(verificationCode) {
  return (dispatch, getState) => {
    const phoneNumber = selectPhoneToVerify(getState()); // const countryCode = selectUserCountryCode(getState());

    dispatch({
      type: ACTIONS.ACTIONS.USER_PHONE_VERIFY_STARTED,
      code: verificationCode
    });
    Lbryio.call('user_mobile', 'phone_number_confirm', {
      verification_code: verificationCode,
      mobileNo: phoneNumber // country_code: countryCode,

    }, 'post').then(user => {
      if (user.is_identity_verified) {
        dispatch({
          type: ACTIONS.ACTIONS.USER_PHONE_VERIFY_SUCCESS,
          data: {
            user
          }
        });
        dispatch(doFetchFeaturedUris());
      }
    }).catch(error => dispatch(doUserPhoneVerifyFailure(error)));
  };
}
function doUserMobileVerify(mobileNo, verificationCode) {
  return dispatch => {
    dispatch({
      type: ACTIONS.ACTIONS.USER_PHONE_VERIFY_STARTED,
      code: verificationCode
    });
    Lbryio.call('user_mobile', 'phone_number_confirm', {
      verification_code: verificationCode,
      mobileNo // country_code: countryCode,

    }, 'post').then(user => {
      if (user.is_identity_verified) {
        dispatch({
          type: ACTIONS.ACTIONS.USER_PHONE_VERIFY_SUCCESS,
          data: {
            user
          }
        });
        dispatch(doFetchFeaturedUris());
      }
    }).catch(error => dispatch(doUserPhoneVerifyFailure(error)));
  };
}
function doUserLogout() {
  return dispatch => {
    Lbryio.call('user', 'logout', {}, 'post').then(data => {
      if (data.user_id === '' || data.user_id === null || data.user_id === undefined) {
        dispatch({
          type: ACTIONS.ACTIONS.USER_LOGOUT_SUCCESS,
          data: {
            data
          }
        });
      }
    });
  };
} // eslint-disable-next-line camelcase

function doUserReport(report_type, report_reason, claim_id) {
  return dispatch => {
    Lbryio.call('api', 'report', {
      report_type,
      report_reason,
      claim_id
    }, 'post').then(data => {
      dispatch({
        type: ACTIONS.ACTIONS.USER_REPORT_SUCCESS,
        data: {
          data
        }
      });
    });
  };
}
function doUserEmailToVerify(email) {
  return dispatch => {
    dispatch({
      type: ACTIONS.ACTIONS.USER_EMAIL_VERIFY_SET,
      data: {
        email
      }
    });
  };
}
function doUserEmailNew(email, password) {
  return dispatch => {
    dispatch({
      type: ACTIONS.ACTIONS.USER_EMAIL_NEW_STARTED,
      email
    });

    const success = () => {
      dispatch({
        type: ACTIONS.ACTIONS.USER_EMAIL_NEW_SUCCESS,
        data: {
          email
        }
      });
      dispatch(doUserFetch());
    };

    const failure = error => {
      dispatch({
        type: ACTIONS.ACTIONS.USER_EMAIL_NEW_FAILURE,
        data: {
          error
        }
      });
    };

    Lbryio.call('user_email', 'new', {
      email,
      password,
      send_verification_email: true
    }, 'post').catch(error => {
      if (error.response && error.response.status === 409) {
        return Lbryio.call('user_email', 'resend_token', {
          email,
          only_if_expired: true
        }, 'post').then(success, failure);
      }

      throw error;
    }).then(success, failure);
  };
}
function doUserEmailLogin(email, password) {
  return dispatch => {
    Lbryio.call('user_email', 'login', {
      email,
      password
    }, 'post').then(data => {
      dispatch({
        type: ACTIONS.ACTIONS.USER_EMAIL_LOGIN,
        data: {
          data
        }
      });
      dispatch(doFetchFeaturedUris());
    }).catch(error => {
      throw new Error('User Email Login Error ', error);
    });
  };
}
function doUserResendVerificationEmail(email) {
  return dispatch => {
    dispatch({
      type: ACTIONS.ACTIONS.USER_EMAIL_VERIFY_RETRY,
      email
    });

    const success = () => {
      dispatch({
        type: ACTIONS.ACTIONS.USER_EMAIL_NEW_SUCCESS,
        data: {
          email
        }
      });
      dispatch(doUserFetch());
    };

    const failure = error => {
      dispatch({
        type: ACTIONS.ACTIONS.USER_EMAIL_NEW_FAILURE,
        data: {
          error
        }
      });
    };

    Lbryio.call('user_email', 'resend_token', {
      email
    }, 'post').catch(error => {
      if (error.response && error.response.status === 409) {
        throw error;
      }
    }).then(success, failure);
  };
}
function doUserEmailVerifyFailure(error) {
  return {
    type: ACTIONS.ACTIONS.USER_EMAIL_VERIFY_FAILURE,
    data: {
      error
    }
  };
}
function doUserEmailVerify(verificationToken, recaptcha) {
  return (dispatch, getState) => {
    const email = selectEmailToVerify(getState());
    dispatch({
      type: ACTIONS.ACTIONS.USER_EMAIL_VERIFY_STARTED,
      code: verificationToken,
      recaptcha
    });
    Lbryio.call('user_email', 'confirm', {
      verification_token: verificationToken,
      email,
      recaptcha
    }, 'post').then(userEmail => {
      if (userEmail.is_verified) {
        dispatch({
          type: ACTIONS.ACTIONS.USER_EMAIL_VERIFY_SUCCESS,
          data: {
            email
          }
        });
        dispatch(doUserFetch());
      } else {
        throw new Error('Your email is still not verified.'); // shouldn't happen
      }
    }).catch(error => dispatch(doUserEmailVerifyFailure(error)));
  };
}
function doFetchAccessToken() {
  return dispatch => {
    const success = token => dispatch({
      type: ACTIONS.ACTIONS.FETCH_ACCESS_TOKEN_SUCCESS,
      data: {
        token
      }
    });

    Lbryio.getAuthToken().then(success);
  };
}
function doUserIdentityVerify(stripeToken) {
  return dispatch => {
    dispatch({
      type: ACTIONS.ACTIONS.USER_IDENTITY_VERIFY_STARTED,
      token: stripeToken
    });
    Lbryio.call('user', 'verify_identity', {
      stripe_token: stripeToken
    }, 'post').then(user => {
      if (user.is_identity_verified) {
        dispatch({
          type: ACTIONS.ACTIONS.USER_IDENTITY_VERIFY_SUCCESS,
          data: {
            user
          }
        });
      } else {
        throw new Error('Your identity is still not verified. This should not happen.'); // shouldn't happen
      }
    }).catch(error => {
      dispatch({
        type: ACTIONS.ACTIONS.USER_IDENTITY_VERIFY_FAILURE,
        data: {
          error: error.toString()
        }
      });
    });
  };
}
function doUserInviteNew(email) {
  return dispatch => {
    dispatch({
      type: ACTIONS.ACTIONS.USER_INVITE_NEW_STARTED
    });
    Lbryio.call('user', 'invite', {
      email
    }, 'post').then(() => {
      dispatch({
        type: ACTIONS.ACTIONS.USER_INVITE_NEW_SUCCESS,
        data: {
          email
        }
      });
      dispatch(ACTIONS.doToast({
        message: __('Invite sent to %s', email)
      }));
      dispatch(doFetchInviteStatus());
    }).catch(error => {
      dispatch({
        type: ACTIONS.ACTIONS.USER_INVITE_NEW_FAILURE,
        data: {
          error
        }
      });
    });
  };
}
function doUserCheckId(input) {
  return dispatch => {
    Lbryio.call('user', 'check_id', {
      input
    }, 'post').then(user => {
      if (user.type === 'mobile') {
        dispatch({
          type: ACTIONS.ACTIONS.USER_VERIFY_ID,
          data: {
            user
          }
        }); // dispatch(doUserPhoneNew(user.value));
      } else if (user.type === 'email') {
        dispatch({
          type: ACTIONS.ACTIONS.USER_VERIFY_ID,
          data: {
            user
          }
        });
        dispatch(doUserEmailNew());
      } else throw new Error('Your email or mobile check gone wrong in Api');
    }).catch(error => {
      throw new Error('User receiving Error ', error);
    });
  };
}
function doUserProfileSave(name, dob, number, gender, description, email) {
  return dispatch => {
    Lbryio.call('user', 'profile_save', {
      name,
      dob,
      number,
      gender,
      description,
      email
    }, 'post').then(userData => {
      dispatch({
        type: USER_PROFILE_SAVE,
        data: {
          profileData: userData.profile
        }
      });
    });
  };
} // eslint-disable-next-line camelcase

function doUserNotificationRegister(device_token, device_type) {
  return dispatch => {
    Lbryio.call('user_notification', 'notification_register', {
      device_token,
      device_type
    }, 'post').then(data => {
      console.log('Notification Register result is ', data);
      dispatch({
        type: NOTIFICATION_REGISTER,
        data: {
          notificationData: data
        }
      });
    }).catch(error => {
      throw new Error('User receiving Error ', error);
    });
  };
} // eslint-disable-next-line camelcase

function doUserNotificationCallback(device_token) {
  return dispatch => {
    Lbryio.call('user_notification', 'notification_callback', {
      device_token
    }, 'post').then(data => {
      console.log('Notification callback result is ', data, data[0]);
      dispatch({
        type: NOTIFICATION_CALLBACK,
        data: {
          notificationCallbackData: data[0]
        }
      });
    }).catch(error => {
      throw new Error('User receiving Error ', error);
    });
  };
}
function doUserProfileUpdate(name, dob, gender, description) {
  return dispatch => {
    Lbryio.call('user', 'profile_update', {
      name,
      dob,
      gender,
      description
    }, 'post').then(userData => {
      dispatch({
        type: USER_PROFILE_UPDATE,
        data: {
          profileData: userData.profile
        }
      });
    });
  };
}
function doUserProfileFetch() {
  return dispatch => {
    Lbryio.call('user', 'profile_fetch').then(res => {
      dispatch({
        type: USER_PROFILE_FETCH,
        data: {
          profileData: res[0].profile
        }
      });
    });
  };
}
function doSaveUserHelp(issue, message) {
  return dispatch => {
    Lbryio.call('helpandfeedback', 'help', {
      issue,
      message
    }, 'post').then(response => {
      dispatch({
        type: ACTIONS.ACTIONS.SAVE_USER_HELP,
        data: response
      });
    });
  };
}
function doSaveUserFeedback(value1, value2, value3, value4) {
  return dispatch => {
    Lbryio.call('helpandfeedback', 'feedback', {
      value1,
      value2,
      value3,
      value4
    }, 'post').then(response => {
      dispatch({
        type: ACTIONS.ACTIONS.SAVE_USER_FEEDBACK,
        data: response
      });
    });
  };
} // Search with filters -- Views | Likes | Upload Time

function doSearchWithFilters(string, viewFilter, timeFilter, visible) {
  return dispatch => {
    Lbryio.call('file', 'search', {
      search_string: string,
      view_filter: viewFilter,
      time_filter: timeFilter
    }).then(res => {
      dispatch({
        type: SEARCH_QUERY_FILTERS,
        data: {
          filteredSearchList: res,
          filterResultsVisible: visible
        }
      });
    });
  };
}
function doFilterResultsVisible(visible) {
  return dispatch => {
    dispatch({
      type: SEARCH_FILTER_VISIBLE,
      data: {
        filterResultsVisible: visible
      }
    });
  };
}

function doRewardList() {
  return dispatch => {
    dispatch({
      type: ACTIONS.ACTIONS.FETCH_REWARDS_STARTED
    });
    Lbryio.call('reward', 'list', {
      multiple_rewards_per_type: true
    }).then(userRewards => {
      dispatch({
        type: ACTIONS.ACTIONS.FETCH_REWARDS_COMPLETED,
        data: {
          userRewards
        }
      });
    }).catch(() => {
      dispatch({
        type: ACTIONS.ACTIONS.FETCH_REWARDS_COMPLETED,
        data: {
          userRewards: []
        }
      });
    });
  };
}
function doClaimRewardType(rewardType, options = {}) {
  return (dispatch, getState) => {
    const state = getState();
    const userIsRewardApproved = selectUserIsRewardApproved(state);
    const unclaimedRewards = selectUnclaimedRewards(state);
    const reward = rewardType === rewards.TYPE_REWARD_CODE ? {
      reward_type: rewards.TYPE_REWARD_CODE
    } : unclaimedRewards.find(ur => ur.reward_type === rewardType);

    if (rewardType !== rewards.TYPE_REWARD_CODE) {
      if (!reward || reward.transaction_id) {
        // already claimed or doesn't exist, do nothing
        return;
      }
    }

    if (!userIsRewardApproved && rewardType !== rewards.TYPE_CONFIRM_EMAIL) {
      if (!options || !options.failSilently && rewards.callbacks.rewardApprovalRequested) {
        rewards.callbacks.rewardApprovalRequested();
      }

      return;
    } // Set `claim_code` so the api knows which reward to give if there are multiple of the same type


    const params = options.params || {};
    params.claim_code = reward.claim_code;
    dispatch({
      type: ACTIONS.ACTIONS.CLAIM_REWARD_STARTED,
      data: {
        reward
      }
    });

    const success = successReward => {
      dispatch({
        type: ACTIONS.ACTIONS.CLAIM_REWARD_SUCCESS,
        data: {
          reward: successReward
        }
      });

      if (successReward.reward_type === rewards.TYPE_NEW_USER && rewards.callbacks.claimFirstRewardSuccess) {
        rewards.callbacks.claimFirstRewardSuccess();
      } else if (successReward.reward_type === rewards.TYPE_REFERRAL) {
        dispatch(doFetchInviteStatus());
      }

      dispatch(doRewardList());
    };

    const failure = error => {
      dispatch({
        type: ACTIONS.ACTIONS.CLAIM_REWARD_FAILURE,
        data: {
          reward,
          error: !options || !options.failSilently ? error : undefined
        }
      });

      if (options.notifyError) {
        dispatch(ACTIONS.doToast({
          message: error.message,
          isError: true
        }));
      }
    };

    rewards.claimReward(rewardType, params).then(success, failure);
  };
}
function doClaimEligiblePurchaseRewards() {
  return (dispatch, getState) => {
    const state = getState();
    const unclaimedRewards = selectUnclaimedRewards(state);
    const userIsRewardApproved = selectUserIsRewardApproved(state);

    if (!userIsRewardApproved || !Lbryio.enabled) {
      return;
    }

    if (unclaimedRewards.find(ur => ur.reward_type === rewards.TYPE_FIRST_STREAM)) {
      dispatch(doClaimRewardType(rewards.TYPE_FIRST_STREAM));
    } else {
      [rewards.TYPE_MANY_DOWNLOADS, rewards.TYPE_FEATURED_DOWNLOAD].forEach(type => {
        dispatch(doClaimRewardType(type, {
          failSilently: true
        }));
      });
    }
  };
}
function doClaimRewardClearError(reward) {
  return dispatch => {
    dispatch({
      type: ACTIONS.ACTIONS.CLAIM_REWARD_CLEAR_ERROR,
      data: {
        reward
      }
    });
  };
}
function doFetchRewardedContent() {
  return dispatch => {
    const success = nameToClaimId => {
      dispatch({
        type: ACTIONS.ACTIONS.FETCH_REWARD_CONTENT_COMPLETED,
        data: {
          claimIds: Object.values(nameToClaimId),
          success: true
        }
      });
    };

    const failure = () => {
      dispatch({
        type: ACTIONS.ACTIONS.FETCH_REWARD_CONTENT_COMPLETED,
        data: {
          claimIds: [],
          success: false
        }
      });
    };

    Lbryio.call('reward', 'list_featured').then(success, failure);
  };
}

const PAGE_SIZE = 20;

function swapKeyAndValue(dict) {
  const ret = {}; // eslint-disable-next-line no-restricted-syntax

  for (const key in dict) {
    if (dict.hasOwnProperty(key)) {
      ret[dict[key]] = key;
    }
  }

  return ret;
}

const selectState$2 = state => state.subscriptions || {}; // Returns the count


const selectSubscriptionCount = reselect.createSelector(selectState$2, state => state.subscriptionCount); // Returns the list of channel uris a user is subscribed to

const selectSubscriptions = reselect.createSelector(selectState$2, state => state.subscriptions); // Fetching list of users subscriptions

const selectIsFetchingSubscriptions = reselect.createSelector(selectState$2, state => state.loading); // The current view mode on the subscriptions page

const selectViewMode = reselect.createSelector(selectState$2, state => state.viewMode); // Suggested subscriptions from internal apis

const selectSuggested = reselect.createSelector(selectState$2, state => state.suggested);
const selectIsFetchingSuggested = reselect.createSelector(selectState$2, state => state.loadingSuggested);
const selectSuggestedChannels = reselect.createSelector(selectSubscriptions, selectSuggested, (userSubscriptions, suggested) => {
  if (!suggested) {
    return null;
  } // Swap the key/value because we will use the uri for everything, this just makes it easier
  // suggested is returned from the api with the form:
  // {
  //   featured: { "Channel label": uri, ... },
  //   top_subscribed: { "@channel": uri, ... }
  //   top_bid: { "@channel": uri, ... }
  // }
  // To properly compare the suggested subscriptions from our current subscribed channels
  // We only care about the uri, not the label
  // We also only care about top_subscribed and featured
  // top_bid could just be porn or a channel with no content


  const topSubscribedSuggestions = swapKeyAndValue(suggested[SUGGESTED_TOP_SUBSCRIBED]);
  const featuredSuggestions = swapKeyAndValue(suggested[SUGGESTED_FEATURED]); // Make sure there are no duplicates
  // If a uri isn't already in the suggested object, add it

  const suggestedChannels = { ...topSubscribedSuggestions
  };
  Object.keys(featuredSuggestions).forEach(uri => {
    if (!suggestedChannels[uri]) {
      const channelLabel = featuredSuggestions[uri];
      suggestedChannels[uri] = channelLabel;
    }
  });
  userSubscriptions.forEach(({
    uri
  }) => {
    // Note to passer bys:
    // Maybe we should just remove the `lbry://` prefix from subscription uris
    // Most places don't store them like that
    const subscribedUri = uri.slice('lbry://'.length);

    if (suggestedChannels[subscribedUri]) {
      delete suggestedChannels[subscribedUri];
    }
  });
  return Object.keys(suggestedChannels).map(uri => ({
    uri,
    label: suggestedChannels[uri]
  })).slice(0, 5);
});
const selectFirstRunCompleted = reselect.createSelector(selectState$2, state => state.firstRunCompleted);
const selectShowSuggestedSubs = reselect.createSelector(selectState$2, state => state.showSuggestedSubs); // Fetching any claims that are a part of a users subscriptions

const selectSubscriptionsBeingFetched = reselect.createSelector(selectSubscriptions, ACTIONS.selectAllFetchingChannelClaims, (subscriptions, fetchingChannelClaims) => {
  const fetchingSubscriptionMap = {};
  subscriptions.forEach(sub => {
    const isFetching = fetchingChannelClaims && fetchingChannelClaims[sub.uri];

    if (isFetching) {
      fetchingSubscriptionMap[sub.uri] = true;
    }
  });
  return fetchingSubscriptionMap;
});
const selectUnreadByChannel = reselect.createSelector(selectState$2, state => state.unread); // Returns the current total of unread subscriptions

const selectUnreadAmount = reselect.createSelector(selectUnreadByChannel, unreadByChannel => {
  const unreadChannels = Object.keys(unreadByChannel);
  let badges = 0;

  if (!unreadChannels.length) {
    return badges;
  }

  unreadChannels.forEach(channel => {
    badges += unreadByChannel[channel].uris.length;
  });
  return badges;
}); // Returns the uris with channels as an array with the channel with the newest content first
// If you just want the `unread` state, use selectUnread

const selectUnreadSubscriptions = reselect.createSelector(selectUnreadAmount, selectUnreadByChannel, ACTIONS.selectClaimsByUri, (unreadAmount, unreadByChannel, claimsByUri) => {
  // determine which channel has the newest content
  const unreadList = [];

  if (!unreadAmount) {
    return unreadList;
  }

  const channelUriList = Object.keys(unreadByChannel); // There is only one channel with unread notifications

  if (unreadAmount === 1) {
    channelUriList.forEach(channel => {
      const unreadChannel = {
        channel,
        uris: unreadByChannel[channel].uris
      };
      unreadList.push(unreadChannel);
    });
    return unreadList;
  }

  channelUriList.sort((channel1, channel2) => {
    const latestUriFromChannel1 = unreadByChannel[channel1].uris[0];
    const latestClaimFromChannel1 = claimsByUri[latestUriFromChannel1] || {};
    const latestUriFromChannel2 = unreadByChannel[channel2].uris[0];
    const latestClaimFromChannel2 = claimsByUri[latestUriFromChannel2] || {};
    const latestHeightFromChannel1 = latestClaimFromChannel1.height || 0;
    const latestHeightFromChannel2 = latestClaimFromChannel2.height || 0;

    if (latestHeightFromChannel1 !== latestHeightFromChannel2) {
      return latestHeightFromChannel2 - latestHeightFromChannel1;
    }

    return 0;
  }).forEach(channel => {
    const unreadSubscription = unreadByChannel[channel];
    const unreadChannel = {
      channel,
      uris: unreadSubscription.uris
    };
    unreadList.push(unreadChannel);
  });
  return unreadList;
}); // Returns all unread subscriptions for a uri passed in

const makeSelectUnreadByChannel = uri => reselect.createSelector(selectUnreadByChannel, unread => unread[uri]); // Returns the first page of claims for every channel a user is subscribed to

const selectSubscriptionClaims = reselect.createSelector(ACTIONS.selectAllClaimsByChannel, ACTIONS.selectClaimsById, selectSubscriptions, selectUnreadByChannel, (channelIds, allClaims, savedSubscriptions, unreadByChannel) => {
  // no claims loaded yet
  if (!Object.keys(channelIds).length) {
    return [];
  }

  let fetchedSubscriptions = [];
  savedSubscriptions.forEach(subscription => {
    let channelClaims = []; // if subscribed channel has content

    if (channelIds[subscription.uri] && channelIds[subscription.uri]['1']) {
      // This will need to be more robust, we will want to be able to load more than the first page
      // Strip out any ids that will be shown as notifications
      const pageOneChannelIds = channelIds[subscription.uri]['1']; // we have the channel ids and the corresponding claims
      // loop over the list of ids and grab the claim

      pageOneChannelIds.forEach(id => {
        const grabbedClaim = allClaims[id];

        if (unreadByChannel[subscription.uri] && unreadByChannel[subscription.uri].uris.some(uri => uri.includes(id))) {
          grabbedClaim.isNew = true;
        }

        channelClaims = channelClaims.concat([grabbedClaim]);
      });
    }

    fetchedSubscriptions = fetchedSubscriptions.concat(channelClaims);
  });
  return fetchedSubscriptions;
}); // Returns true if a user is subscribed to the channel associated with the uri passed in
// Accepts content or channel uris

const makeSelectIsSubscribed = uri => reselect.createSelector(selectSubscriptions, ACTIONS.makeSelectChannelForClaimUri(uri, true), (subscriptions, channelUri) => {
  if (channelUri) {
    return subscriptions.some(sub => sub.uri === channelUri);
  } // If we couldn't get a channel uri from the claim uri, the uri passed in might be a channel already


  const {
    isChannel
  } = ACTIONS.parseURI(uri);

  if (isChannel) {
    const uriWithPrefix = uri.startsWith('lbry://') ? uri : `lbry://${uri}`;
    return subscriptions.some(sub => sub.uri === uriWithPrefix);
  }

  return false;
});
const makeSelectIsNew = uri => reselect.createSelector(makeSelectIsSubscribed(uri), ACTIONS.makeSelectChannelForClaimUri(uri), selectUnreadByChannel, (isSubscribed, channel, unreadByChannel) => {
  if (!isSubscribed) {
    return false;
  }

  const unreadForChannel = unreadByChannel[`lbry://${channel}`];

  if (unreadForChannel) {
    return unreadForChannel.uris.includes(uri);
  }

  return false; // If they are subscribed, check to see if this uri is in the list of unreads
});
const selectEnabledChannelNotifications = reselect.createSelector(selectState$2, state => state.enabledChannelNotifications);

//      
const CHECK_SUBSCRIPTIONS_INTERVAL = 15 * 60 * 1000;
const doSetViewMode = viewMode => dispatch => dispatch({
  type: SET_VIEW_MODE,
  data: viewMode
});
const setSubscriptionLatest = (subscription, uri) => dispatch => dispatch({
  type: SET_SUBSCRIPTION_LATEST,
  data: {
    subscription,
    uri
  }
}); // Populate a channels unread subscriptions or update the type

const doUpdateUnreadSubscriptions = (channelUri, uris, type) => (dispatch, getState) => {
  const state = getState();
  const unreadByChannel = selectUnreadByChannel(state);
  const currentUnreadForChannel = unreadByChannel[channelUri];
  let newUris = [];
  let newType = null;

  if (!currentUnreadForChannel) {
    newUris = uris;
    newType = type;
  } else {
    if (uris) {
      // If a channel currently has no unread uris, just add them all
      if (!currentUnreadForChannel.uris || !currentUnreadForChannel.uris.length) {
        newUris = uris;
      } else {
        // They already have unreads and now there are new ones
        // Add the new ones to the beginning of the list
        // Make sure there are no duplicates
        const currentUnreadUris = currentUnreadForChannel.uris;
        newUris = uris.filter(uri => !currentUnreadUris.includes(uri)).concat(currentUnreadUris);
      }
    } else {
      newUris = currentUnreadForChannel.uris;
    }

    newType = type || currentUnreadForChannel.type;
  }

  dispatch({
    type: UPDATE_SUBSCRIPTION_UNREADS,
    data: {
      channel: channelUri,
      uris: newUris,
      type: newType
    }
  });
}; // Remove multiple files (or all) from a channels unread subscriptions

const doRemoveUnreadSubscriptions = (channelUri, readUris) => (dispatch, getState) => {
  const state = getState();
  const unreadByChannel = selectUnreadByChannel(state); // If no channel is passed in, remove all unread subscriptions from all channels

  if (!channelUri) {
    return dispatch({
      type: REMOVE_SUBSCRIPTION_UNREADS,
      data: {
        channel: null
      }
    });
  }

  const currentChannelUnread = unreadByChannel[channelUri];

  if (!currentChannelUnread || !currentChannelUnread.uris) {
    // Channel passed in doesn't have any unreads
    return null;
  } // For each uri passed in, remove it from the list of unread uris
  // If no uris are passed in, remove them all


  let newUris;

  if (readUris) {
    const urisToRemoveMap = readUris.reduce((acc, val) => ({ ...acc,
      [val]: true
    }), {});
    const filteredUris = currentChannelUnread.uris.filter(uri => !urisToRemoveMap[uri]);
    newUris = filteredUris.length ? filteredUris : null;
  } else {
    newUris = null;
  }

  return dispatch({
    type: REMOVE_SUBSCRIPTION_UNREADS,
    data: {
      channel: channelUri,
      uris: newUris
    }
  });
}; // Remove a single file from a channels unread subscriptions

const doRemoveUnreadSubscription = (channelUri, readUri) => dispatch => {
  dispatch(doRemoveUnreadSubscriptions(channelUri, [readUri]));
};
const doCheckSubscription = (subscriptionUri, shouldNotify) => (dispatch, getState) => {
  // no dispatching FETCH_CHANNEL_CLAIMS_STARTED; causes loading issues on <SubscriptionsPage>
  const state = getState();

  const savedSubscription = state.subscriptions.subscriptions.find(sub => sub.uri === subscriptionUri);

  if (!savedSubscription) {
    throw Error(`Trying to find new content for ${subscriptionUri} but it doesn't exist in your subscriptions`);
  }

  const {
    claimId
  } = ACTIONS.parseURI(subscriptionUri); // We may be duplicating calls here. Can this logic be baked into doFetchClaimsByChannel?

  ACTIONS.Lbry.claim_search({
    channel_id: claimId,
    page: 1,
    page_size: PAGE_SIZE
  }).then(result => {
    const {
      items: claimsInChannel
    } = result; // may happen if subscribed to an abandoned channel or an empty channel

    if (!claimsInChannel || !claimsInChannel.length) {
      return;
    } // Determine if the latest subscription currently saved is actually the latest subscription


    const latestIndex = claimsInChannel.findIndex(claim => `${claim.name}#${claim.claim_id}` === savedSubscription.latest); // If latest is -1, it is a newly subscribed channel or there have been 10+ claims published since last viewed

    const latestIndexToNotify = latestIndex === -1 ? 10 : latestIndex; // If latest is 0, nothing has changed
    // Do not download/notify about new content, it would download/notify 10 claims per channel

    if (latestIndex !== 0 && savedSubscription.latest) {
      let downloadCount = 0;
      const newUnread = [];
      claimsInChannel.slice(0, latestIndexToNotify).forEach(claim => {
        const uri = ACTIONS.buildURI({
          contentName: claim.name,
          claimId: claim.claim_id
        }, true);

        if (shouldNotify) {
          newUnread.push(uri);
        }
      });
      dispatch(doUpdateUnreadSubscriptions(subscriptionUri, newUnread, downloadCount > 0 ? DOWNLOADING : NOTIFY_ONLY));
    } // Set the latest piece of content for a channel
    // This allows the app to know if there has been new content since it was last set


    dispatch(setSubscriptionLatest({
      channelName: claimsInChannel[0].channel_name,
      uri: ACTIONS.buildURI({
        channelName: claimsInChannel[0].channel_name,
        claimId: claimsInChannel[0].claim_id
      }, false)
    }, ACTIONS.buildURI({
      contentName: claimsInChannel[0].name,
      claimId: claimsInChannel[0].claim_id
    }, false))); // calling FETCH_CHANNEL_CLAIMS_COMPLETED after not calling STARTED
    // means it will delete a non-existant fetchingChannelClaims[uri]

    dispatch({
      type: FETCH_CHANNEL_CLAIMS_COMPLETED,
      data: {
        uri: subscriptionUri,
        claims: claimsInChannel || [],
        page: 1
      }
    });
  });
};
const doChannelSubscribe = subscription => (dispatch, getState) => {
  const {
    settings: {
      daemonSettings
    }
  } = getState();
  const isSharingData = daemonSettings ? daemonSettings.share_usage_data : true;
  const subscriptionUri = subscription.uri;

  if (!subscriptionUri.startsWith('lbry://')) {
    throw Error(`Subscription uris must inclue the "lbry://" prefix.\nTried to subscribe to ${subscriptionUri}`);
  }

  dispatch({
    type: CHANNEL_SUBSCRIBE,
    data: subscription
  }); // if the user isn't sharing data, keep the subscriptions entirely in the app

  if (isSharingData) {
    const {
      claimId
    } = ACTIONS.parseURI(subscription.uri); // They are sharing data, we can store their subscriptions in our internal database

    Lbryio.call('subscription', 'new', {
      channel_name: subscription.channelName,
      claim_id: claimId
    }); // dispatch(doClaimRewardType(rewards.TYPE_SUBSCRIPTION, { failSilently: true }));
  }

  dispatch(doCheckSubscription(subscription.uri, true));
};
const doChannelUnsubscribe = subscription => (dispatch, getState) => {
  const {
    settings: {
      daemonSettings
    }
  } = getState();
  const isSharingData = daemonSettings ? daemonSettings.share_usage_data : true;
  dispatch({
    type: CHANNEL_UNSUBSCRIBE,
    data: subscription
  });

  if (isSharingData) {
    const {
      claimId
    } = ACTIONS.parseURI(subscription.uri);
    Lbryio.call('subscription', 'delete', {
      claim_id: claimId
    });
  }
};
const doCheckSubscriptions = () => (dispatch, getState) => {
  const state = getState();
  const subscriptions = selectSubscriptions(state);
  subscriptions.forEach(sub => {
    dispatch(doCheckSubscription(sub.uri, true));
  });
};
const doFetchMySubscriptions = () => (dispatch, getState) => {
  const state = getState();
  const {
    subscriptions: reduxSubscriptions
  } = state.subscriptions; // default to true if daemonSettings not found

  const isSharingData = state.settings && state.settings.daemonSettings ? state.settings.daemonSettings.share_usage_data : true;

  if (!isSharingData && isSharingData !== undefined) {
    // They aren't sharing their data, subscriptions will be handled by persisted redux state
    return;
  } // most of this logic comes from scenarios where the db isn't synced with redux
  // this will happen if the user stops sharing data


  dispatch({
    type: FETCH_SUBSCRIPTIONS_START
  });
  Lbryio.call('subscription', 'list').then(dbSubscriptions => {
    const storedSubscriptions = dbSubscriptions || []; // User has no subscriptions in db or redux

    if (!storedSubscriptions.length && (!reduxSubscriptions || !reduxSubscriptions.length)) {
      return [];
    } // There is some mismatch between redux state and db state
    // If something is in the db, but not in redux, add it to redux
    // If something is in redux, but not in the db, add it to the db


    if (storedSubscriptions.length !== reduxSubscriptions.length) {
      const dbSubMap = {};
      const reduxSubMap = {};
      const subsNotInDB = [];
      const subscriptionsToReturn = reduxSubscriptions.slice();
      storedSubscriptions.forEach(sub => {
        dbSubMap[sub.claim_id] = 1;
      });
      reduxSubscriptions.forEach(sub => {
        const {
          claimId
        } = ACTIONS.parseURI(sub.uri);
        reduxSubMap[claimId] = 1;

        if (!dbSubMap[claimId]) {
          subsNotInDB.push({
            claim_id: claimId,
            channel_name: sub.channelName
          });
        }
      });
      storedSubscriptions.forEach(sub => {
        if (!reduxSubMap[sub.claim_id]) {
          const uri = `lbry://${sub.channel_name}#${sub.claim_id}`;
          subscriptionsToReturn.push({
            uri,
            channelName: sub.channel_name
          });
        }
      });
      return Promise.all(subsNotInDB.map(payload => Lbryio.call('subscription', 'new', payload))).then(() => subscriptionsToReturn).catch(() => // let it fail, we will try again when the navigate to the subscriptions page
      subscriptionsToReturn);
    } // DB is already synced, just return the subscriptions in redux


    return reduxSubscriptions;
  }).then(subscriptions => {
    dispatch({
      type: FETCH_SUBSCRIPTIONS_SUCCESS,
      data: subscriptions
    });
    dispatch(ACTIONS.doResolveUris(subscriptions.map(({
      uri
    }) => uri)));
    dispatch(doCheckSubscriptions());
  }).catch(() => {
    dispatch({
      type: FETCH_SUBSCRIPTIONS_FAIL
    });
  });
};
const doCheckSubscriptionsInit = () => dispatch => {
  // doCheckSubscriptionsInit is called by doDaemonReady
  // setTimeout below is a hack to ensure redux is hydrated when subscriptions are checked
  // this will be replaced with <PersistGate> which reqiures a package upgrade
  setTimeout(() => dispatch(doFetchMySubscriptions()), 5000);
  const checkSubscriptionsTimer = setInterval(() => dispatch(doCheckSubscriptions()), CHECK_SUBSCRIPTIONS_INTERVAL);
  dispatch({
    type: CHECK_SUBSCRIPTIONS_SUBSCRIBE,
    data: {
      checkSubscriptionsTimer
    }
  });
  setInterval(() => dispatch(doCheckSubscriptions()), CHECK_SUBSCRIPTIONS_INTERVAL);
};
const doFetchRecommendedSubscriptions = () => dispatch => {
  dispatch({
    type: GET_SUGGESTED_SUBSCRIPTIONS_START
  });
  return Lbryio.call('subscription', 'suggest').then(suggested => dispatch({
    type: GET_SUGGESTED_SUBSCRIPTIONS_SUCCESS,
    data: suggested
  })).catch(error => dispatch({
    type: GET_SUGGESTED_SUBSCRIPTIONS_FAIL,
    error
  }));
};
const doCompleteFirstRun = () => dispatch => dispatch({
  type: SUBSCRIPTION_FIRST_RUN_COMPLETED
});
const doShowSuggestedSubs = () => dispatch => dispatch({
  type: VIEW_SUGGESTED_SUBSCRIPTIONS
});
const doChannelSubscriptionEnableNotifications = channelName => dispatch => dispatch({
  type: CHANNEL_SUBSCRIPTION_ENABLE_NOTIFICATIONS,
  data: channelName
});
const doChannelSubscriptionDisableNotifications = channelName => dispatch => dispatch({
  type: CHANNEL_SUBSCRIPTION_DISABLE_NOTIFICATIONS,
  data: channelName
});
const doCountSubscriptions = claimId => dispatch => Lbryio.call('subscription', 'count', {
  claim_id: claimId
}).then(count => {
  dispatch({
    type: FETCH_SUBSCRIPTION_COUNT,
    data: {
      subscriptionCount: count
    }
  });
});

function doReportType(reportType, claimId) {
  return dispatch => {
    Lbryio.call('api', 'report', {
      claim_id: claimId,
      report_type: reportType
    }, 'post').then(() => {
      dispatch({
        type: ACTIONS.ACTIONS.USER_REPORT_TYPE,
        data: {
          reportType,
          claimId
        }
      });
    }).catch(error => {
      throw new Error(error);
    });
  };
}

function doFetchCostInfoForUri(uri) {
  return (dispatch, getState) => {
    const state = getState();
    const claim = ACTIONS.selectClaimsByUri(state)[uri];
    if (!claim) return;

    function resolve(costInfo) {
      dispatch({
        type: FETCH_COST_INFO_COMPLETED,
        data: {
          uri,
          costInfo
        }
      });
    }

    const fee = claim.value ? claim.value.fee : undefined;

    if (fee === undefined) {
      resolve({
        cost: 0,
        includesData: true
      });
    } else if (fee.currency === 'LBC') {
      resolve({
        cost: fee.amount,
        includesData: true
      });
    } else {
      Lbryio.getExchangeRates().then(({
        LBC_USD
      }) => {
        resolve({
          cost: fee.amount / LBC_USD,
          includesData: true
        });
      });
    }
  };
}

const CHECK_BLACK_LISTED_CONTENT_INTERVAL = 60 * 60 * 1000;
function doFetchBlackListedOutpoints() {
  return dispatch => {
    dispatch({
      type: FETCH_BLACK_LISTED_CONTENT_STARTED
    });

    const success = ({
      outpoints
    }) => {
      const splitedOutpoints = [];
      outpoints.forEach((outpoint, index) => {
        const [txid, nout] = outpoint.split(':');
        splitedOutpoints[index] = {
          txid,
          nout: Number.parseInt(nout, 10)
        };
      });
      dispatch({
        type: FETCH_BLACK_LISTED_CONTENT_COMPLETED,
        data: {
          outpoints: splitedOutpoints,
          success: true
        }
      });
    };

    const failure = ({
      error
    }) => {
      dispatch({
        type: FETCH_BLACK_LISTED_CONTENT_FAILED,
        data: {
          error,
          success: false
        }
      });
    };

    Lbryio.call('file', 'list_blocked').then(success, failure);
  };
}
function doBlackListedOutpointsSubscribe() {
  return dispatch => {
    dispatch(doFetchBlackListedOutpoints());
    setInterval(() => dispatch(doFetchBlackListedOutpoints()), CHECK_BLACK_LISTED_CONTENT_INTERVAL);
  };
}

//      
function doFetchViewCount(claimId) {
  return dispatch => {
    Lbryio.call('file', 'view_count', {
      claim_id: claimId
    }).then(res => {
      dispatch({
        type: VIEW_COUNTER,
        data: {
          viewCount: res.count
        }
      });
    });
  };
}
function doRegView(claimId) {
  return dispatch => {
    Lbryio.call('file', 'view_count', {
      claim_id: claimId
    }, 'post').then(res => {
      dispatch({
        type: REG_VIEW,
        data: {
          viewCount: res.count
        }
      });
    });
  };
}

function doSetSync(oldHash, newHash, data) {
  return dispatch => {
    dispatch({
      type: SET_SYNC_STARTED
    });
    Lbryio.call('sync', 'set', {
      old_hash: oldHash,
      new_hash: newHash,
      data
    }, 'post').then(response => {
      if (!response.hash) {
        return dispatch({
          type: SET_SYNC_FAILED,
          data: {
            error: 'No hash returned for sync/set.'
          }
        });
      }

      return dispatch({
        type: SET_SYNC_COMPLETED,
        data: {
          syncHash: response.hash
        }
      });
    }).catch(error => {
      dispatch({
        type: SET_SYNC_FAILED,
        data: {
          error
        }
      });
    });
  };
}
function doSetDefaultAccount() {
  return dispatch => {
    dispatch({
      type: SET_DEFAULT_ACCOUNT
    });
    ACTIONS.Lbry.account_list().then(accountList => {
      const {
        lbc_mainnet: accounts
      } = accountList;
      let defaultId;

      for (let i = 0; i < accounts.length; ++i) {
        if (accounts[i].satoshis > 0) {
          defaultId = accounts[i].id;
          break;
        }
      } // In a case where there's no balance on either account
      // assume the second (which is created after sync) as default


      if (!defaultId && accounts.length > 1) {
        defaultId = accounts[1].id;
      } // Set the default account


      if (defaultId) {
        ACTIONS.Lbry.account_set({
          account_id: defaultId,
          default: true
        });
      }
    });
  };
}
function doGetSync(password) {
  return dispatch => {
    dispatch({
      type: GET_SYNC_STARTED
    });
    ACTIONS.Lbry.sync_hash().then(hash => {
      Lbryio.call('sync', 'get', {
        hash
      }, 'post').then(response => {
        const data = {
          hasSyncedWallet: true
        };

        if (response.changed) {
          const syncHash = response.hash;
          data.syncHash = syncHash;
          ACTIONS.Lbry.sync_apply({
            password,
            data: response.data
          }).then(({
            hash: walletHash,
            data: walletData
          }) => {
            if (walletHash !== syncHash) {
              // different local hash, need to synchronise
              dispatch(doSetSync(syncHash, walletHash, walletData));
            } // set the default account


            dispatch(doSetDefaultAccount());
          });
        }

        dispatch({
          type: GET_SYNC_COMPLETED,
          data
        });
      }).catch(() => {
        // user doesn't have a synced wallet
        dispatch({
          type: GET_SYNC_COMPLETED,
          data: {
            hasSyncedWallet: false,
            syncHash: null
          }
        }); // call sync_apply to get data to sync
        // first time sync. use any string for old hash

        ACTIONS.Lbry.sync_apply({
          password
        }).then(({
          hash: walletHash,
          data
        }) => dispatch(doSetSync(null, walletHash, data)));
      });
    });
  };
}

function doLikeOnClick(claimId, likeStatus, claimName) {
  return dispatch => {
    Lbryio.call('likes', 'like', {
      claim_id: claimId,
      liked: likeStatus,
      claim_name: claimName
    }, 'post').then(() => {
      dispatch({
        type: LIKE_ON_CLICK,
        data: {
          likeStatus
        }
      });
    });
  };
}
function doDislikeOnClick(claimId, dislikeStatus, claimName) {
  return dispatch => {
    Lbryio.call('likes', 'dislike', {
      claim_id: claimId,
      disliked: dislikeStatus,
      claim_name: claimName
    }, 'post').then(() => {
      dispatch({
        type: DISLIKE_ON_CLICK,
        data: {
          dislikeStatus
        }
      });
    });
  };
}
function doLikeCount(claimId) {
  return dispatch => {
    Lbryio.call('likes', 'count', {
      claim_id: claimId
    }, 'post').then(count => {
      dispatch({
        type: LIKE_COUNT,
        data: {
          likeCount: count.likes,
          dislikeCount: count.dislikes,
          likeStatus: count.likeStatus,
          dislikeStatus: count.dislikeStatus
        }
      });
    });
  };
}
function doLikeCheck(claimId) {
  return dispatch => {
    Lbryio.call('likes', 'check', {
      claim_id: claimId
    }, 'post').then(count => {
      dispatch({
        type: LIKE_CHECK,
        data: {
          likeStatus: count.likeStatus,
          dislikeStatus: count.dislikeStatus
        }
      });
    });
  };
}
function doFetchLikedList() {
  return dispatch => {
    Lbryio.call('likes', 'list').then(list => {
      dispatch({
        type: FETCH_LIKED_LIST,
        data: {
          likedUris: list
        }
      });
    });
  };
}

//      
function doFetchPlaylist(playlistName) {
  return dispatch => {
    Lbryio.call('playlist', 'list', {
      name: playlistName
    }).then(res => {
      dispatch({
        type: FETCH_PLAYLIST,
        data: {
          playlistUris: res,
          playlistName
        }
      });
    });
  };
}
function doAddToPlaylist(claimId, claimName, playlistName) {
  return dispatch => {
    Lbryio.call('playlist', 'add', {
      claim_id: claimId,
      claim_name: claimName,
      name: playlistName
    }, 'post').then(() => {
      dispatch({
        type: ADD_TO_PLAYLIST,
        data: {
          playlistName
        }
      });
    });
  };
}
function doRemoveFromPlaylist(claimId, playlistName) {
  return dispatch => {
    Lbryio.call('playlist', 'remove', {
      claim_id: claimId,
      name: playlistName
    }, 'post').then(() => {
      dispatch({
        type: REMOVE_FROM_PLAYLIST,
        data: {
          playlistName
        }
      });
    });
  };
}

function doFetchCategoryList() {
  return dispatch => {
    Lbryio.call('file', 'category_list').then(res => {
      dispatch({
        type: FETCH_CATEGORY_LIST,
        data: {
          categoryListing: res
        }
      });
    });
  };
}

//      
function doAddToHistory(claimId, claimName) {
  return dispatch => {
    Lbryio.call('history', 'add', {
      claim_id: claimId,
      claim_name: claimName
    }, 'post').then(() => {
      dispatch({
        type: ADD_TO_HISTORY
      });
    });
  };
}
function doFetchHistoryList() {
  return dispatch => {
    Lbryio.call('history', 'list').then(list => {
      dispatch({
        type: FETCH_HISTORY,
        data: {
          historyList: list
        }
      });
    });
  };
}
function doRemoveFromHistory(claimId) {
  return dispatch => {
    Lbryio.call('history', 'delete', {
      claim_id: claimId
    }, 'post').then(data => {
      dispatch({
        type: DELETE_HISTORY,
        data
      });
    });
  };
}
function doRemoveAllFromHistory() {
  return dispatch => {
    Lbryio.call('history', 'delete_all').then(data => {
      dispatch({
        type: DELETE_ALL_HISTORY,
        data
      });
    });
  };
}

//      
function doAutocompleteSearchQuery() {
  return dispatch => {
    Lbryio.call('autocomplete', '').then(() => {
      dispatch({
        type: AUTOCOMPLETE_SEARCH_QUERY,
        data: {
          autocompleteList: list
        }
      });
    });
  };
}
function doSearchQuery() {
  return dispatch => {
    Lbryio.call('search', '').then(list => {
      dispatch({
        type: SEARCH_QUERY_RESULT,
        data: {
          searchQueryList: list
        }
      });
    });
  };
}

const reducers = {};
const defaultState$1 = {
  authenticating: false
};

reducers[GENERATE_AUTH_TOKEN_FAILURE] = state => Object.assign({}, state, {
  authToken: null,
  authenticating: false
});

reducers[GENERATE_AUTH_TOKEN_STARTED] = state => Object.assign({}, state, {
  authenticating: true
});

reducers[GENERATE_AUTH_TOKEN_SUCCESS] = (state, action) => Object.assign({}, state, {
  authToken: action.data.authToken,
  authenticating: false
});

function authReducer(state = defaultState$1, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}

const reducers$1 = {};
const defaultState$2 = {
  fetching: false,
  claimedRewardsById: {},
  // id => reward
  unclaimedRewards: [],
  claimPendingByType: {},
  claimErrorsByType: {},
  rewardedContentClaimIds: []
};

reducers$1[ACTIONS.ACTIONS.FETCH_REWARDS_STARTED] = state => Object.assign({}, state, {
  fetching: true
});

reducers$1[ACTIONS.ACTIONS.FETCH_REWARDS_COMPLETED] = (state, action) => {
  const {
    userRewards
  } = action.data;
  const unclaimedRewards = [];
  const claimedRewards = {};
  userRewards.forEach(reward => {
    if (reward.transaction_id) {
      claimedRewards[reward.id] = reward;
    } else {
      unclaimedRewards.push(reward);
    }
  });
  return Object.assign({}, state, {
    claimedRewardsById: claimedRewards,
    unclaimedRewards,
    fetching: false
  });
};

function setClaimRewardState(state, reward, isClaiming, errorMessage = '') {
  const newClaimPendingByType = Object.assign({}, state.claimPendingByType);
  const newClaimErrorsByType = Object.assign({}, state.claimErrorsByType); // Currently, for multiple rewards of the same type, they will both show "claiming" when one is beacuse we track this by `reward_type`
  // To fix this we will need to use `claim_code` instead, and change all selectors to match

  if (isClaiming) {
    newClaimPendingByType[reward.reward_type] = isClaiming;
  } else {
    delete newClaimPendingByType[reward.reward_type];
  }

  if (errorMessage) {
    newClaimErrorsByType[reward.reward_type] = errorMessage;
  } else {
    delete newClaimErrorsByType[reward.reward_type];
  }

  return Object.assign({}, state, {
    claimPendingByType: newClaimPendingByType,
    claimErrorsByType: newClaimErrorsByType
  });
}

reducers$1[ACTIONS.ACTIONS.CLAIM_REWARD_STARTED] = (state, action) => {
  const {
    reward
  } = action.data;
  return setClaimRewardState(state, reward, true, '');
};

reducers$1[ACTIONS.ACTIONS.CLAIM_REWARD_SUCCESS] = (state, action) => {
  const {
    reward
  } = action.data;
  const {
    unclaimedRewards
  } = state;
  const index = unclaimedRewards.findIndex(ur => ur.claim_code === reward.claim_code);
  unclaimedRewards.splice(index, 1);
  const {
    claimedRewardsById
  } = state;
  claimedRewardsById[reward.id] = reward;
  const newState = { ...state,
    unclaimedRewards: [...unclaimedRewards],
    claimedRewardsById: { ...claimedRewardsById
    }
  };
  return setClaimRewardState(newState, reward, false, '');
};

reducers$1[ACTIONS.ACTIONS.CLAIM_REWARD_FAILURE] = (state, action) => {
  const {
    reward,
    error
  } = action.data;
  return setClaimRewardState(state, reward, false, error ? error.message : '');
};

reducers$1[ACTIONS.ACTIONS.CLAIM_REWARD_CLEAR_ERROR] = (state, action) => {
  const {
    reward
  } = action.data;
  return setClaimRewardState(state, reward, state.claimPendingByType[reward.reward_type], '');
};

reducers$1[ACTIONS.ACTIONS.FETCH_REWARD_CONTENT_COMPLETED] = (state, action) => {
  const {
    claimIds
  } = action.data;
  return Object.assign({}, state, {
    rewardedContentClaimIds: claimIds
  });
};

function rewardsReducer(state = defaultState$2, action) {
  const handler = reducers$1[action.type];
  if (handler) return handler(state, action);
  return state;
}

const reducers$2 = {};
const defaultState$3 = {
  authenticationIsPending: false,
  userIsPending: false,
  emailNewIsPending: false,
  emailNewErrorMessage: '',
  emailToVerify: '',
  inviteNewErrorMessage: '',
  inviteNewIsPending: false,
  inviteStatusIsPending: false,
  invitesRemaining: undefined,
  invitees: undefined,
  user: undefined,
  usersDefaultState: [],
  profileData: {},
  filterResultsVisible: false
};

reducers$2[ACTIONS.ACTIONS.AUTHENTICATION_STARTED] = state => Object.assign({}, state, {
  authenticationIsPending: true,
  userIsPending: true,
  user: defaultState$3.user
});

reducers$2[ACTIONS.ACTIONS.AUTHENTICATION_SUCCESS] = (state, action) => Object.assign({}, state, {
  authenticationIsPending: false,
  userIsPending: false,
  user: action.data.user,
  isLoggedIn: action.data.user.is_identity_verified
});

reducers$2[ACTIONS.ACTIONS.AUTHENTICATION_FAILURE] = state => Object.assign({}, state, {
  authenticationIsPending: false,
  userIsPending: false,
  user: null
});

reducers$2[ACTIONS.ACTIONS.USER_FETCH_STARTED] = state => Object.assign({}, state, {
  userIsPending: true,
  user: defaultState$3.user
});

reducers$2[ACTIONS.ACTIONS.USER_FETCH_SUCCESS] = (state, action) => Object.assign({}, state, {
  userIsPending: false,
  user: action.data.user,
  isLoggedIn: action.data.user.is_identity_verified
});

reducers$2[ACTIONS.ACTIONS.USER_FETCH_FAILURE] = state => Object.assign({}, state, {
  userIsPending: true,
  user: null
});

reducers$2[ACTIONS.ACTIONS.USER_PHONE_NEW_STARTED] = (state, action) => {
  const user = Object.assign({}, state.user);
  user.country_code = action.data.country_code;
  return Object.assign({}, state, {
    phoneNewIsPending: true,
    phoneNewErrorMessage: '',
    user
  });
};

reducers$2[ACTIONS.ACTIONS.USER_PHONE_NEW_SUCCESS] = (state, action) => Object.assign({}, state, {
  phoneToVerify: action.data.phone,
  phoneNewIsPending: false
});

reducers$2[ACTIONS.ACTIONS.USER_PHONE_RESET] = state => Object.assign({}, state, {
  phoneToVerify: null
});

reducers$2[ACTIONS.ACTIONS.USER_REPORT_SUCCESS] = (state, action) => Object.assign({}, state, {
  claim_id: action.data.claim_id,
  report_type: action.data.report_type
});

reducers$2[ACTIONS.ACTIONS.USER_PHONE_NEW_FAILURE] = (state, action) => Object.assign({}, state, {
  phoneNewIsPending: false,
  phoneNewErrorMessage: action.data.error,
  isLoggedIn: false
});

reducers$2[ACTIONS.ACTIONS.USER_PHONE_VERIFY_STARTED] = state => Object.assign({}, state, {
  phoneVerifyIsPending: true,
  phoneVerifyErrorMessage: ''
});

reducers$2[ACTIONS.ACTIONS.USER_VERIFY_ID] = (state, action) => Object.assign({}, state, {
  isNewUser: action.data.user.isNew,
  // inputType: action.data.user.type,
  input: action.data.user.value
});

reducers$2[ACTIONS.ACTIONS.USER_PHONE_VERIFY_SUCCESS] = (state, action) => Object.assign({}, state, {
  phoneToVerify: '',
  phoneVerifyIsPending: false,
  user: action.data.user,
  isLoggedIn: action.data.user.is_identity_verified
});

reducers$2[ACTIONS.ACTIONS.USER_LOGOUT_SUCCESS] = state => Object.assign({}, state, {
  isLoggedIn: false,
  isNewUser: undefined,
  inputType: undefined
});

reducers$2[ACTIONS.ACTIONS.USER_PHONE_VERIFY_FAILURE] = (state, action) => Object.assign({}, state, {
  phoneVerifyIsPending: false,
  phoneVerifyErrorMessage: action.data.error
});

reducers$2[ACTIONS.ACTIONS.USER_EMAIL_NEW_STARTED] = state => Object.assign({}, state, {
  emailNewIsPending: true,
  emailNewErrorMessage: ''
});

reducers$2[ACTIONS.ACTIONS.USER_EMAIL_NEW_SUCCESS] = (state, action) => {
  const user = Object.assign({}, state.user);
  user.primary_email = action.data.email;
  return Object.assign({}, state, {
    emailToVerify: action.data.email,
    emailNewIsPending: false,
    user
  });
};

reducers$2[ACTIONS.ACTIONS.USER_EMAIL_LOGIN] = (state, action) => Object.assign({}, state, {
  user: action.data,
  isLoggedIn: action.data.data.is_identity_verified
});

reducers$2[ACTIONS.ACTIONS.USER_EMAIL_NEW_EXISTS] = (state, action) => Object.assign({}, state, {
  emailToVerify: action.data.email,
  emailNewIsPending: false
});

reducers$2[ACTIONS.ACTIONS.USER_EMAIL_NEW_FAILURE] = (state, action) => Object.assign({}, state, {
  emailNewIsPending: false,
  emailNewErrorMessage: action.data.error
});

reducers$2[ACTIONS.ACTIONS.USER_EMAIL_VERIFY_STARTED] = state => Object.assign({}, state, {
  emailVerifyIsPending: true,
  emailVerifyErrorMessage: ''
});

reducers$2[ACTIONS.ACTIONS.USER_EMAIL_VERIFY_SUCCESS] = (state, action) => {
  const user = Object.assign({}, state.user);
  user.primary_email = action.data.email;
  return Object.assign({}, state, {
    emailToVerify: '',
    emailVerifyIsPending: false,
    user
  });
};

reducers$2[ACTIONS.ACTIONS.USER_EMAIL_VERIFY_FAILURE] = (state, action) => Object.assign({}, state, {
  emailVerifyIsPending: false,
  emailVerifyErrorMessage: action.data.error
});

reducers$2[ACTIONS.ACTIONS.USER_EMAIL_VERIFY_SET] = (state, action) => Object.assign({}, state, {
  emailToVerify: action.data.email
});

reducers$2[ACTIONS.ACTIONS.USER_IDENTITY_VERIFY_STARTED] = state => Object.assign({}, state, {
  identityVerifyIsPending: true,
  identityVerifyErrorMessage: ''
});

reducers$2[ACTIONS.ACTIONS.USER_IDENTITY_VERIFY_SUCCESS] = (state, action) => Object.assign({}, state, {
  identityVerifyIsPending: false,
  identityVerifyErrorMessage: '',
  user: action.data.user,
  isLoggedIn: action.data.user.is_identity_verified
});

reducers$2[ACTIONS.ACTIONS.USER_IDENTITY_VERIFY_FAILURE] = (state, action) => Object.assign({}, state, {
  identityVerifyIsPending: false,
  identityVerifyErrorMessage: action.data.error
});

reducers$2[ACTIONS.ACTIONS.FETCH_ACCESS_TOKEN_SUCCESS] = (state, action) => {
  const {
    token
  } = action.data;
  return Object.assign({}, state, {
    accessToken: token
  });
};

reducers$2[ACTIONS.ACTIONS.USER_INVITE_STATUS_FETCH_STARTED] = state => Object.assign({}, state, {
  inviteStatusIsPending: true
});

reducers$2[ACTIONS.ACTIONS.USER_INVITE_STATUS_FETCH_SUCCESS] = (state, action) => Object.assign({}, state, {
  inviteStatusIsPending: false,
  invitesRemaining: action.data.invitesRemaining,
  invitees: action.data.invitees,
  referralLink: action.data.referralLink
});

reducers$2[ACTIONS.ACTIONS.USER_INVITE_NEW_STARTED] = state => Object.assign({}, state, {
  inviteNewIsPending: true,
  inviteNewErrorMessage: ''
});

reducers$2[ACTIONS.ACTIONS.USER_INVITE_NEW_SUCCESS] = state => Object.assign({}, state, {
  inviteNewIsPending: false,
  inviteNewErrorMessage: ''
});

reducers$2[ACTIONS.ACTIONS.USER_INVITE_NEW_FAILURE] = (state, action) => Object.assign({}, state, {
  inviteNewIsPending: false,
  inviteNewErrorMessage: action.data.error.message
});

reducers$2[ACTIONS.ACTIONS.USER_INVITE_STATUS_FETCH_FAILURE] = state => Object.assign({}, state, {
  inviteStatusIsPending: false,
  invitesRemaining: null,
  invitees: null
});

reducers$2[USER_PROFILE_SAVE] = (state, action) => {
  const {
    profileData
  } = action.data;
  return Object.assign({}, state, {
    profileData
  });
};

reducers$2[USER_PROFILE_UPDATE] = (state, action) => {
  const {
    profileData
  } = action.data;
  return Object.assign({}, state, {
    profileData
  });
};

reducers$2[NOTIFICATION_CALLBACK] = (state, action) => {
  const {
    notificationCallbackData
  } = action.data;
  return Object.assign({}, state, {
    notificationCallbackData
  });
};

reducers$2[NOTIFICATION_REGISTER] = (state, action) => {
  const {
    notificationData
  } = action.data;
  return Object.assign({}, state, {
    notificationData
  });
};

reducers$2[USER_PROFILE_FETCH] = (state, action) => {
  const {
    profileData
  } = action.data;
  return Object.assign({}, state, {
    profileData
  });
};

reducers$2[SEARCH_QUERY_FILTERS] = (state, action) => {
  const {
    filteredSearchList,
    filterResultsVisible
  } = action.data;
  return Object.assign({}, state, {
    filteredSearchList,
    filterResultsVisible
  });
};

reducers$2[SEARCH_FILTER_VISIBLE] = (state, action) => {
  const {
    filterResultsVisible
  } = action.data;
  return Object.assign({}, state, {
    filterResultsVisible
  });
};

reducers$2[ACTIONS.ACTIONS.SAVE_USER_HELP] = (state, action) => Object.assign({}, state, {
  response: action.data.success
});

reducers$2[ACTIONS.ACTIONS.SAVE_USER_FEEDBACK] = (state, action) => Object.assign({}, state, {
  response: action.data.success
});

function userReducer(state = defaultState$3, action) {
  const handler = reducers$2[action.type];
  if (handler) return handler(state, action);
  return state;
}

const defaultState$4 = {
  fetching: {},
  byUri: {}
};
const costInfoReducer = handleActions({
  [FETCH_COST_INFO_STARTED]: (state, action) => {
    const {
      uri
    } = action.data;
    const newFetching = Object.assign({}, state.fetching);
    newFetching[uri] = true;
    return { ...state,
      fetching: newFetching
    };
  },
  [FETCH_COST_INFO_COMPLETED]: (state, action) => {
    const {
      uri,
      costInfo
    } = action.data;
    const newByUri = Object.assign({}, state.byUri);
    const newFetching = Object.assign({}, state.fetching);
    newByUri[uri] = costInfo;
    delete newFetching[uri];
    return { ...state,
      byUri: newByUri,
      fetching: newFetching
    };
  }
}, defaultState$4);

const defaultState$5 = {
  fetchingBlackListedOutpoints: false,
  fetchingBlackListedOutpointsSucceed: undefined,
  blackListedOutpoints: undefined
};
const blacklistReducer = handleActions({
  [FETCH_BLACK_LISTED_CONTENT_STARTED]: state => ({ ...state,
    fetchingBlackListedOutpoints: true
  }),
  [FETCH_BLACK_LISTED_CONTENT_COMPLETED]: (state, action) => {
    const {
      outpoints,
      success
    } = action.data;
    return { ...state,
      fetchingBlackListedOutpoints: false,
      fetchingBlackListedOutpointsSucceed: success,
      blackListedOutpoints: outpoints
    };
  },
  [FETCH_BLACK_LISTED_CONTENT_FAILED]: (state, action) => {
    const {
      error,
      success
    } = action.data;
    return { ...state,
      fetchingBlackListedOutpoints: false,
      fetchingBlackListedOutpointsSucceed: success,
      fetchingBlackListedOutpointsError: error
    };
  }
}, defaultState$5);

const defaultState$6 = {
  fetchingFeaturedContent: false,
  fetchingFeaturedContentFailed: false,
  featuredUris: undefined,
  fetchingTrendingContent: false,
  fetchingTrendingContentFailed: false,
  trendingUris: undefined
};
const homepageReducer = handleActions({
  [FETCH_FEATURED_CONTENT_STARTED]: state => ({ ...state,
    fetchingFeaturedContent: true
  }),
  [FETCH_FEATURED_CONTENT_COMPLETED]: (state, action) => {
    const {
      uris,
      success
    } = action.data;
    return { ...state,
      fetchingFeaturedContent: false,
      fetchingFeaturedContentFailed: !success,
      featuredUris: uris
    };
  },
  [FETCH_TRENDING_CONTENT_STARTED]: state => ({ ...state,
    fetchingTrendingContent: true
  }),
  [FETCH_CONTENT_CATEGORY]: (state, action) => {
    const {
      uris
    } = action.data;
    return { ...state,
      fetchingContentCategory: uris
    };
  },
  [FETCH_RECENT_LIST]: (state, action) => {
    const {
      data
    } = action.data;
    return { ...state,
      fetchingRecentList: data
    };
  },
  [FETCH_NOT_INTERESTED_LIST]: (state, action) => {
    const {
      data
    } = action.data;
    return { ...state,
      fetchingNotInterestedList: data
    };
  },
  [NOT_INTERESTED_CONTENT]: (state, action) => {
    const {
      data
    } = action.data.claim_id;
    return { ...state,
      notInterestedContent: data
    };
  },
  [FETCH_TRENDING_CONTENT_COMPLETED]: (state, action) => {
    const {
      uris,
      success
    } = action.data;
    return { ...state,
      fetchingTrendingContent: false,
      fetchingTrendingContentFailed: !success,
      trendingUris: uris
    };
  }
}, defaultState$6);

const defaultState$7 = {
  fetchingViewCount: false,
  viewCountError: undefined,
  viewCountById: {},
  viewCount: 0
};
const statsReducer = handleActions({
  [VIEW_COUNTER]: (state, action) => {
    const {
      viewCount
    } = action.data;
    return { ...state,
      viewCount
    };
  },
  [REG_VIEW]: (state, action) => {
    const {
      viewCount
    } = action.data;
    return { ...state,
      viewCount
    };
  }
}, defaultState$7);

const reducers$3 = {};
const defaultState$8 = {
  hasSyncedWallet: false,
  syncHash: null,
  setSyncErrorMessage: null,
  retrievingSync: false,
  settingSync: false
};

reducers$3[GET_SYNC_STARTED] = state => Object.assign({}, state, {
  retrievingSync: true
});

reducers$3[GET_SYNC_COMPLETED] = (state, action) => Object.assign({}, state, {
  syncHash: action.data.syncHash,
  hasSyncedWallet: action.data.hasSyncedWallet,
  retrievingSync: false
});

reducers$3[SET_SYNC_STARTED] = state => Object.assign({}, state, {
  settingSync: true,
  setSyncErrorMessage: null
});

reducers$3[SET_SYNC_FAILED] = (state, action) => Object.assign({}, state, {
  settingSync: true,
  setSyncErrorMessage: action.data.error
});

reducers$3[SET_SYNC_COMPLETED] = (state, action) => Object.assign({}, state, {
  settingSync: false,
  setSyncErrorMessage: null,
  hasSyncedWallet: true,
  // sync was successful, so the user has a synced wallet at this point
  syncHash: action.data.syncHash
});

function syncReducer(state = defaultState$8, action) {
  const handler = reducers$3[action.type];
  if (handler) return handler(state, action);
  return state;
}

const defaultState$9 = {
  likeStatus: false,
  likeCount: 0,
  dislikeStatus: false,
  dislikeCount: 0
};
const likesReducer = handleActions({
  [LIKE_ON_CLICK]: (state, action) => {
    const {
      likeStatus
    } = action.data;
    return { ...state,
      likeCount: likeStatus ? state.likeCount + 1 : state.likeCount - 1,
      dislikeCount: state.dislikeStatus ? state.dislikeCount - 1 : state.dislikeCount,
      likeStatus,
      dislikeStatus: false
    };
  },
  [DISLIKE_ON_CLICK]: (state, action) => {
    const {
      dislikeStatus
    } = action.data;
    return { ...state,
      likeCount: state.likeStatus ? state.likeCount - 1 : state.likeCount,
      dislikeCount: dislikeStatus ? state.dislikeCount + 1 : state.dislikeCount - 1,
      dislikeStatus,
      likeStatus: false
    };
  },
  [LIKE_COUNT]: (state, action) => {
    const {
      likeCount,
      dislikeCount
    } = action.data;
    return { ...state,
      likeCount,
      dislikeCount
    };
  },
  [LIKE_CHECK]: (state, action) => {
    const {
      likeStatus,
      dislikeStatus
    } = action.data;
    return { ...state,
      likeStatus,
      dislikeStatus
    };
  },
  [FETCH_LIKED_LIST]: (state, action) => {
    const {
      likedUris
    } = action.data;
    return { ...state,
      likedUris
    };
  }
}, defaultState$9);

const defaultState$a = {
  playlistUris: {},
  playlistName: 'Watch Later'
};
const playlistReducer = handleActions({
  [FETCH_PLAYLIST]: (state, action) => {
    const {
      playlistUris,
      playlistName
    } = action.data;
    return { ...state,
      playlistUris,
      playlistName
    };
  },
  [ADD_TO_PLAYLIST]: (state, action) => {
    const {
      playlistName
    } = action.data;
    return { ...state,
      playlistName
    };
  },
  [REMOVE_FROM_PLAYLIST]: (state, action) => {
    const {
      playlistName
    } = action.data;
    return { ...state,
      playlistName
    };
  }
}, defaultState$a);

const reducers$4 = {};

reducers$4[ACTIONS.USER_REPORT_TYPE] = (state, action) => Object.assign({}, state, {
  reportType: action.data.reportType,
  claimId: action.data.claimId
});

function reportReducer(state, action) {
  const handler = reducers$4[action.type];
  if (handler) return handler(state, action);
  return state;
}

const defaultState$b = {
  categoryListing: {}
};
const categoryReducer = handleActions({
  [FETCH_CATEGORY_LIST]: (state, action) => {
    const {
      categoryListing
    } = action.data;
    return { ...state,
      categoryListing
    };
  }
}, defaultState$b);

const defaultState$c = {
  historyList: {}
};
const historyReducer = handleActions({
  /*eslint-disable */
  //suppress all warnings between comments
  // eslint-disable-next-line no-use-before-define
  [ADD_TO_HISTORY]: (state, action) => ({ ...state
  }),

  /* eslint-enable */
  [FETCH_HISTORY]: (state, action) => {
    const {
      historyList
    } = action.data;
    return { ...state,
      historyList
    };
  },
  [DELETE_HISTORY]: (state, action) => {
    const {
      claimId
    } = action.data;
    return { ...state,
      claimId
    };
  },
  [DELETE_ALL_HISTORY]: (state, action) => {
    const {
      data
    } = action.data;
    return { ...state,
      data
    };
  }
}, defaultState$c);

const defaultState$d = {
  autocompleteList: {},
  searchQueryList: {}
};
const searchReducer = handleActions({
  [AUTOCOMPLETE_SEARCH_QUERY]: (state, action) => {
    const {
      autocompleteList
    } = action.data;
    return { ...state,
      autocompleteList
    };
  },
  [AUTOCOMPLETE_SEARCH_QUERY]: (state, action) => {
    const {
      searchQueryList
    } = action.data;
    return { ...state,
      searchQueryList
    };
  }
}, defaultState$d);

const selectState$3 = state => state.auth || {};

const selectAuthToken = reselect.createSelector(selectState$3, state => state.authToken);
const selectIsAuthenticating = reselect.createSelector(selectState$3, state => state.authenticating);

const selectState$4 = state => state.likes || {};
const likeSelector = reselect.createSelector(selectState$4, state => state.likeStatus);
const dislikeSelector = reselect.createSelector(selectState$4, state => state.dislikeStatus);
const likeCountSelector = reselect.createSelector(selectState$4, state => state.likeCount);
const dislikeCountSelector = reselect.createSelector(selectState$4, state => state.dislikeCount);
const selectLikedList = reselect.createSelector(selectState$4, state => state.likedUris);

const selectState$5 = state => state.costInfo || {};
const selectAllCostInfoByUri = reselect.createSelector(selectState$5, state => state.byUri || {});
const makeSelectCostInfoForUri = uri => reselect.createSelector(selectAllCostInfoByUri, costInfos => costInfos && costInfos[uri]);
const selectFetchingCostInfo = reselect.createSelector(selectState$5, state => state.fetching || {});
const makeSelectFetchingCostInfoForUri = uri => reselect.createSelector(selectFetchingCostInfo, fetchingByUri => fetchingByUri && fetchingByUri[uri]);

const selectState$6 = state => state.blacklist || {};
const selectBlackListedOutpoints = reselect.createSelector(selectState$6, state => state.blackListedOutpoints);

const selectState$7 = state => state.homepage || {};

const selectFeaturedUris = reselect.createSelector(selectState$7, state => state.featuredUris);
const selectFetchingFeaturedUris = reselect.createSelector(selectState$7, state => state.fetchingFeaturedContent);
const selectTrendingUris = reselect.createSelector(selectState$7, state => state.trendingUris);
const selectFetchingTrendingUris = reselect.createSelector(selectState$7, state => state.fetchingTrendingContent);
const selectContentCategory = reselect.createSelector(selectState$7, state => state.fetchingContentCategory);
const selectRecentList = reselect.createSelector(selectState$7, state => state.fetchingRecentList);
const selectNotInterestedList = reselect.createSelector(selectState$7, state => state.fetchingNotInterestedList);
const selectNotInterested = reselect.createSelector(selectState$7, state => state.notInterestedContent);

const selectState$8 = state => state.stats || {};

const selectViewCount = reselect.createSelector(selectState$8, state => state.viewCount);
const makeSelectViewCountForUri = uri => reselect.createSelector(ACTIONS.makeSelectClaimForUri(uri), selectViewCount, (claim, viewCountById) => viewCountById[claim.claim_id] || 0);

const selectState$9 = state => state.playlist || {};
const selectPlaylistName = reselect.createSelector(selectState$9, state => state.playlistName);
const selectPlaylistUris = reselect.createSelector(selectState$9, state => state.playlistUris);

const selectState$a = state => state.category || {};
const selectCategoryListing = reselect.createSelector(selectState$a, state => state.categoryListing);

const selectState$b = state => state.history || {};

const selectHistoryList = reselect.createSelector(selectState$b, state => state.historyList);

const selectState$c = state => state.sync || {};

const selectHasSyncedWallet = reselect.createSelector(selectState$c, state => state.hasSyncedWallet);
const selectSyncHash = reselect.createSelector(selectState$c, state => state.syncHash);
const selectSetSyncErrorMessage = reselect.createSelector(selectState$c, state => state.setSyncErrorMessage);
const selectIsRetrievingSync = reselect.createSelector(selectState$c, state => state.retrievingSync);
const selectIsSettingSync = reselect.createSelector(selectState$c, state => state.settingSync);

exports.LBRYINC_ACTIONS = action_types;
exports.Lbryio = Lbryio;
exports.authReducer = authReducer;
exports.blacklistReducer = blacklistReducer;
exports.categoryReducer = categoryReducer;
exports.costInfoReducer = costInfoReducer;
exports.dislikeCountSelector = dislikeCountSelector;
exports.dislikeSelector = dislikeSelector;
exports.doAddToHistory = doAddToHistory;
exports.doAddToPlaylist = doAddToPlaylist;
exports.doAuthenticate = doAuthenticate;
exports.doAutocompleteSearchQuery = doAutocompleteSearchQuery;
exports.doBlackListedOutpointsSubscribe = doBlackListedOutpointsSubscribe;
exports.doChannelSubscribe = doChannelSubscribe;
exports.doChannelSubscriptionDisableNotifications = doChannelSubscriptionDisableNotifications;
exports.doChannelSubscriptionEnableNotifications = doChannelSubscriptionEnableNotifications;
exports.doChannelUnsubscribe = doChannelUnsubscribe;
exports.doCheckSubscription = doCheckSubscription;
exports.doCheckSubscriptions = doCheckSubscriptions;
exports.doCheckSubscriptionsInit = doCheckSubscriptionsInit;
exports.doClaimEligiblePurchaseRewards = doClaimEligiblePurchaseRewards;
exports.doClaimRewardClearError = doClaimRewardClearError;
exports.doClaimRewardType = doClaimRewardType;
exports.doCompleteFirstRun = doCompleteFirstRun;
exports.doCountSubscriptions = doCountSubscriptions;
exports.doDislikeOnClick = doDislikeOnClick;
exports.doFetchAccessToken = doFetchAccessToken;
exports.doFetchCategoryList = doFetchCategoryList;
exports.doFetchContentCategory = doFetchContentCategory;
exports.doFetchCostInfoForUri = doFetchCostInfoForUri;
exports.doFetchFeaturedUris = doFetchFeaturedUris;
exports.doFetchHistoryList = doFetchHistoryList;
exports.doFetchInviteStatus = doFetchInviteStatus;
exports.doFetchLikedList = doFetchLikedList;
exports.doFetchMySubscriptions = doFetchMySubscriptions;
exports.doFetchNotInterestedList = doFetchNotInterestedList;
exports.doFetchPlaylist = doFetchPlaylist;
exports.doFetchRecentList = doFetchRecentList;
exports.doFetchRecommendedSubscriptions = doFetchRecommendedSubscriptions;
exports.doFetchRewardedContent = doFetchRewardedContent;
exports.doFetchTrendingUris = doFetchTrendingUris;
exports.doFetchViewCount = doFetchViewCount;
exports.doFilterResultsVisible = doFilterResultsVisible;
exports.doGenerateAuthToken = doGenerateAuthToken;
exports.doGetSync = doGetSync;
exports.doInstallNew = doInstallNew;
exports.doLikeCheck = doLikeCheck;
exports.doLikeCount = doLikeCount;
exports.doLikeOnClick = doLikeOnClick;
exports.doNotInterested = doNotInterested;
exports.doRegView = doRegView;
exports.doRemoveAllFromHistory = doRemoveAllFromHistory;
exports.doRemoveFromHistory = doRemoveFromHistory;
exports.doRemoveFromPlaylist = doRemoveFromPlaylist;
exports.doRemoveUnreadSubscription = doRemoveUnreadSubscription;
exports.doRemoveUnreadSubscriptions = doRemoveUnreadSubscriptions;
exports.doReportType = doReportType;
exports.doRewardList = doRewardList;
exports.doSaveUserFeedback = doSaveUserFeedback;
exports.doSaveUserHelp = doSaveUserHelp;
exports.doSearchQuery = doSearchQuery;
exports.doSearchWithFilters = doSearchWithFilters;
exports.doSetDefaultAccount = doSetDefaultAccount;
exports.doSetSync = doSetSync;
exports.doSetViewMode = doSetViewMode;
exports.doShowSuggestedSubs = doShowSuggestedSubs;
exports.doUpdateUnreadSubscriptions = doUpdateUnreadSubscriptions;
exports.doUserCheckEmailVerified = doUserCheckEmailVerified;
exports.doUserCheckId = doUserCheckId;
exports.doUserEmailLogin = doUserEmailLogin;
exports.doUserEmailNew = doUserEmailNew;
exports.doUserEmailToVerify = doUserEmailToVerify;
exports.doUserEmailVerify = doUserEmailVerify;
exports.doUserEmailVerifyFailure = doUserEmailVerifyFailure;
exports.doUserFetch = doUserFetch;
exports.doUserIdentityVerify = doUserIdentityVerify;
exports.doUserInviteNew = doUserInviteNew;
exports.doUserLogout = doUserLogout;
exports.doUserMobileVerify = doUserMobileVerify;
exports.doUserNotificationCallback = doUserNotificationCallback;
exports.doUserNotificationRegister = doUserNotificationRegister;
exports.doUserPhoneNew = doUserPhoneNew;
exports.doUserPhoneReset = doUserPhoneReset;
exports.doUserPhoneVerify = doUserPhoneVerify;
exports.doUserPhoneVerifyFailure = doUserPhoneVerifyFailure;
exports.doUserProfileFetch = doUserProfileFetch;
exports.doUserProfileSave = doUserProfileSave;
exports.doUserProfileUpdate = doUserProfileUpdate;
exports.doUserReport = doUserReport;
exports.doUserResendVerificationEmail = doUserResendVerificationEmail;
exports.historyReducer = historyReducer;
exports.homepageReducer = homepageReducer;
exports.likeCountSelector = likeCountSelector;
exports.likeSelector = likeSelector;
exports.likesReducer = likesReducer;
exports.makeSelectClaimRewardError = makeSelectClaimRewardError;
exports.makeSelectCostInfoForUri = makeSelectCostInfoForUri;
exports.makeSelectFetchingCostInfoForUri = makeSelectFetchingCostInfoForUri;
exports.makeSelectIsNew = makeSelectIsNew;
exports.makeSelectIsRewardClaimPending = makeSelectIsRewardClaimPending;
exports.makeSelectIsSubscribed = makeSelectIsSubscribed;
exports.makeSelectRewardAmountByType = makeSelectRewardAmountByType;
exports.makeSelectRewardByType = makeSelectRewardByType;
exports.makeSelectUnreadByChannel = makeSelectUnreadByChannel;
exports.makeSelectViewCountForUri = makeSelectViewCountForUri;
exports.playlistReducer = playlistReducer;
exports.reportReducer = reportReducer;
exports.rewards = rewards;
exports.rewardsReducer = rewardsReducer;
exports.searchReducer = searchReducer;
exports.selectAccessToken = selectAccessToken;
exports.selectAllCostInfoByUri = selectAllCostInfoByUri;
exports.selectAuthToken = selectAuthToken;
exports.selectAuthenticationIsPending = selectAuthenticationIsPending;
exports.selectBlackListedOutpoints = selectBlackListedOutpoints;
exports.selectCategoryListing = selectCategoryListing;
exports.selectClaimErrorsByType = selectClaimErrorsByType;
exports.selectClaimedRewards = selectClaimedRewards;
exports.selectClaimedRewardsById = selectClaimedRewardsById;
exports.selectClaimedRewardsByTransactionId = selectClaimedRewardsByTransactionId;
exports.selectClaimsPendingByType = selectClaimsPendingByType;
exports.selectContentCategory = selectContentCategory;
exports.selectEmailNewErrorMessage = selectEmailNewErrorMessage;
exports.selectEmailNewIsPending = selectEmailNewIsPending;
exports.selectEmailToVerify = selectEmailToVerify;
exports.selectEmailVerifyErrorMessage = selectEmailVerifyErrorMessage;
exports.selectEmailVerifyIsPending = selectEmailVerifyIsPending;
exports.selectEnabledChannelNotifications = selectEnabledChannelNotifications;
exports.selectFeaturedUris = selectFeaturedUris;
exports.selectFeedbackResponse = selectFeedbackResponse;
exports.selectFetchingCostInfo = selectFetchingCostInfo;
exports.selectFetchingFeaturedUris = selectFetchingFeaturedUris;
exports.selectFetchingRewards = selectFetchingRewards;
exports.selectFetchingTrendingUris = selectFetchingTrendingUris;
exports.selectFilterResultsVisible = selectFilterResultsVisible;
exports.selectFilteredSearchList = selectFilteredSearchList;
exports.selectFirstRunCompleted = selectFirstRunCompleted;
exports.selectHasSyncedWallet = selectHasSyncedWallet;
exports.selectHelpResponse = selectHelpResponse;
exports.selectHistoryList = selectHistoryList;
exports.selectIdentityVerifyErrorMessage = selectIdentityVerifyErrorMessage;
exports.selectIdentityVerifyIsPending = selectIdentityVerifyIsPending;
exports.selectIsAuthenticating = selectIsAuthenticating;
exports.selectIsFetchingSubscriptions = selectIsFetchingSubscriptions;
exports.selectIsFetchingSuggested = selectIsFetchingSuggested;
exports.selectIsRetrievingSync = selectIsRetrievingSync;
exports.selectIsSettingSync = selectIsSettingSync;
exports.selectLikedList = selectLikedList;
exports.selectNotInterested = selectNotInterested;
exports.selectNotInterestedList = selectNotInterestedList;
exports.selectPhoneNewErrorMessage = selectPhoneNewErrorMessage;
exports.selectPhoneNewIsPending = selectPhoneNewIsPending;
exports.selectPhoneToVerify = selectPhoneToVerify;
exports.selectPhoneVerifyErrorMessage = selectPhoneVerifyErrorMessage;
exports.selectPhoneVerifyIsPending = selectPhoneVerifyIsPending;
exports.selectPlaylistName = selectPlaylistName;
exports.selectPlaylistUris = selectPlaylistUris;
exports.selectRecentList = selectRecentList;
exports.selectReferralReward = selectReferralReward;
exports.selectRewardContentClaimIds = selectRewardContentClaimIds;
exports.selectSavedUserData = selectSavedUserData;
exports.selectSetSyncErrorMessage = selectSetSyncErrorMessage;
exports.selectShowSuggestedSubs = selectShowSuggestedSubs;
exports.selectSubscriptionClaims = selectSubscriptionClaims;
exports.selectSubscriptionCount = selectSubscriptionCount;
exports.selectSubscriptions = selectSubscriptions;
exports.selectSubscriptionsBeingFetched = selectSubscriptionsBeingFetched;
exports.selectSuggested = selectSuggested;
exports.selectSuggestedChannels = selectSuggestedChannels;
exports.selectSyncHash = selectSyncHash;
exports.selectTrendingUris = selectTrendingUris;
exports.selectUnclaimedRewardValue = selectUnclaimedRewardValue;
exports.selectUnclaimedRewards = selectUnclaimedRewards;
exports.selectUnclaimedRewardsByType = selectUnclaimedRewardsByType;
exports.selectUnreadAmount = selectUnreadAmount;
exports.selectUnreadByChannel = selectUnreadByChannel;
exports.selectUnreadSubscriptions = selectUnreadSubscriptions;
exports.selectUpdatedUserData = selectUpdatedUserData;
exports.selectUser = selectUser;
exports.selectUserCheckId = selectUserCheckId;
exports.selectUserCheckType = selectUserCheckType;
exports.selectUserCheckValue = selectUserCheckValue;
exports.selectUserEmail = selectUserEmail;
exports.selectUserEmailLogin = selectUserEmailLogin;
exports.selectUserInviteNewErrorMessage = selectUserInviteNewErrorMessage;
exports.selectUserInviteNewIsPending = selectUserInviteNewIsPending;
exports.selectUserInviteReferralLink = selectUserInviteReferralLink;
exports.selectUserInviteStatusFailed = selectUserInviteStatusFailed;
exports.selectUserInviteStatusIsPending = selectUserInviteStatusIsPending;
exports.selectUserInvitees = selectUserInvitees;
exports.selectUserInvitesRemaining = selectUserInvitesRemaining;
exports.selectUserIsPending = selectUserIsPending;
exports.selectUserIsRewardApproved = selectUserIsRewardApproved;
exports.selectUserIsVerificationCandidate = selectUserIsVerificationCandidate;
exports.selectUserLoggedOut = selectUserLoggedOut;
exports.selectUserNotificationCallbackData = selectUserNotificationCallbackData;
exports.selectUserNotificationData = selectUserNotificationData;
exports.selectUserPhone = selectUserPhone;
exports.selectUserReport = selectUserReport;
exports.selectViewCount = selectViewCount;
exports.selectViewMode = selectViewMode;
exports.setSubscriptionLatest = setSubscriptionLatest;
exports.statsReducer = statsReducer;
exports.subscriptionsReducer = subscriptions;
exports.syncReducer = syncReducer;
exports.userReducer = userReducer;
