import { ACTIONS } from 'lbry-redux';

const reducers = {};

const defaultState = {
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
};

reducers[ACTIONS.AUTHENTICATION_STARTED] = state =>
  Object.assign({}, state, {
    authenticationIsPending: true,
    userIsPending: true,
    user: defaultState.user,
  });

reducers[ACTIONS.AUTHENTICATION_SUCCESS] = (state, action) =>
  Object.assign({}, state, {
    authenticationIsPending: false,
    userIsPending: false,
    user: action.data.user,
    isLoggedIn: action.data.user.is_identity_verified,
  });

reducers[ACTIONS.AUTHENTICATION_FAILURE] = state =>
  Object.assign({}, state, {
    authenticationIsPending: false,
    userIsPending: false,
    user: null,
  });

reducers[ACTIONS.USER_FETCH_STARTED] = state =>
  Object.assign({}, state, {
    userIsPending: true,
    user: defaultState.user,
  });

reducers[ACTIONS.USER_FETCH_SUCCESS] = (state, action) =>
  Object.assign({}, state, {
    userIsPending: false,
    user: action.data.user,
    isLoggedIn: action.data.user.is_identity_verified,
  });

reducers[ACTIONS.USER_FETCH_FAILURE] = state =>
  Object.assign({}, state, {
    userIsPending: true,
    user: null,
  });

reducers[ACTIONS.USER_PHONE_NEW_STARTED] = (state, action) => {
  const user = Object.assign({}, state.user);
  user.country_code = action.data.country_code;
  return Object.assign({}, state, {
    phoneNewIsPending: true,
    phoneNewErrorMessage: '',
    user,
  });
};

reducers[ACTIONS.USER_PHONE_NEW_SUCCESS] = (state, action) =>
  Object.assign({}, state, {
    phoneToVerify: action.data.phone,
    phoneNewIsPending: false,
  });

reducers[ACTIONS.USER_PHONE_RESET] = state =>
  Object.assign({}, state, {
    phoneToVerify: null,
  });

reducers[ACTIONS.USER_REPORT_SUCCESS] = (state, action) =>
  Object.assign({}, state, {
    claim_id: action.data.claim_id,
    report_type: action.data.report_type,
  });

reducers[ACTIONS.USER_PHONE_NEW_FAILURE] = (state, action) =>
  Object.assign({}, state, {
    phoneNewIsPending: false,
    phoneNewErrorMessage: action.data.error,
    isLoggedIn: false,
  });

reducers[ACTIONS.USER_PHONE_VERIFY_STARTED] = state =>
  Object.assign({}, state, {
    phoneVerifyIsPending: true,
    phoneVerifyErrorMessage: '',
  });

reducers[ACTIONS.USER_VERIFY_ID] = (state, action) =>
  Object.assign({}, state, {
    isNewUser: action.data.user.isNew,
    // inputType: action.data.user.type,
    input: action.data.user.value,
  });

reducers[ACTIONS.USER_PHONE_VERIFY_SUCCESS] = (state, action) =>
  Object.assign({}, state, {
    phoneToVerify: '',
    phoneVerifyIsPending: false,
    user: action.data.user,
    isLoggedIn: action.data.user.is_identity_verified,
  });

reducers[ACTIONS.USER_LOGOUT_SUCCESS] = state =>
  Object.assign({}, state, {
    isLoggedIn: false,
    isNewUser: undefined,
    inputType: undefined,
  });

reducers[ACTIONS.USER_PHONE_VERIFY_FAILURE] = (state, action) =>
  Object.assign({}, state, {
    phoneVerifyIsPending: false,
    phoneVerifyErrorMessage: action.data.error,
  });

reducers[ACTIONS.USER_EMAIL_NEW_STARTED] = state =>
  Object.assign({}, state, {
    emailNewIsPending: true,
    emailNewErrorMessage: '',
  });

reducers[ACTIONS.USER_EMAIL_NEW_SUCCESS] = (state, action) => {
  const user = Object.assign({}, state.user);
  user.primary_email = action.data.email;
  return Object.assign({}, state, {
    emailToVerify: action.data.email,
    emailNewIsPending: false,
    user,
  });
};

reducers[ACTIONS.USER_EMAIL_LOGIN] = (state, action) =>
  Object.assign({}, state, {
    user: action.data,
    isLoggedIn: action.data.data.is_identity_verified,
  });

reducers[ACTIONS.USER_EMAIL_NEW_EXISTS] = (state, action) =>
  Object.assign({}, state, {
    emailToVerify: action.data.email,
    emailNewIsPending: false,
  });

reducers[ACTIONS.USER_EMAIL_NEW_FAILURE] = (state, action) =>
  Object.assign({}, state, {
    emailNewIsPending: false,
    emailNewErrorMessage: action.data.error,
  });

reducers[ACTIONS.USER_EMAIL_VERIFY_STARTED] = state =>
  Object.assign({}, state, {
    emailVerifyIsPending: true,
    emailVerifyErrorMessage: '',
  });

reducers[ACTIONS.USER_EMAIL_VERIFY_SUCCESS] = (state, action) => {
  const user = Object.assign({}, state.user);
  user.primary_email = action.data.email;
  return Object.assign({}, state, {
    emailToVerify: '',
    emailVerifyIsPending: false,
    user,
  });
};

reducers[ACTIONS.USER_EMAIL_VERIFY_FAILURE] = (state, action) =>
  Object.assign({}, state, {
    emailVerifyIsPending: false,
    emailVerifyErrorMessage: action.data.error,
  });

reducers[ACTIONS.USER_EMAIL_VERIFY_SET] = (state, action) =>
  Object.assign({}, state, {
    emailToVerify: action.data.email,
  });

reducers[ACTIONS.USER_IDENTITY_VERIFY_STARTED] = state =>
  Object.assign({}, state, {
    identityVerifyIsPending: true,
    identityVerifyErrorMessage: '',
  });

reducers[ACTIONS.USER_IDENTITY_VERIFY_SUCCESS] = (state, action) =>
  Object.assign({}, state, {
    identityVerifyIsPending: false,
    identityVerifyErrorMessage: '',
    user: action.data.user,
    isLoggedIn: action.data.user.is_identity_verified,
  });

reducers[ACTIONS.USER_IDENTITY_VERIFY_FAILURE] = (state, action) =>
  Object.assign({}, state, {
    identityVerifyIsPending: false,
    identityVerifyErrorMessage: action.data.error,
  });

reducers[ACTIONS.FETCH_ACCESS_TOKEN_SUCCESS] = (state, action) => {
  const { token } = action.data;

  return Object.assign({}, state, {
    accessToken: token,
  });
};

reducers[ACTIONS.USER_INVITE_STATUS_FETCH_STARTED] = state =>
  Object.assign({}, state, {
    inviteStatusIsPending: true,
  });

reducers[ACTIONS.USER_INVITE_STATUS_FETCH_SUCCESS] = (state, action) =>
  Object.assign({}, state, {
    inviteStatusIsPending: false,
    invitesRemaining: action.data.invitesRemaining,
    invitees: action.data.invitees,
    referralLink: action.data.referralLink,
  });

reducers[ACTIONS.USER_INVITE_NEW_STARTED] = state =>
  Object.assign({}, state, {
    inviteNewIsPending: true,
    inviteNewErrorMessage: '',
  });

reducers[ACTIONS.USER_INVITE_NEW_SUCCESS] = state =>
  Object.assign({}, state, {
    inviteNewIsPending: false,
    inviteNewErrorMessage: '',
  });

reducers[ACTIONS.USER_INVITE_NEW_FAILURE] = (state, action) =>
  Object.assign({}, state, {
    inviteNewIsPending: false,
    inviteNewErrorMessage: action.data.error.message,
  });

reducers[ACTIONS.USER_INVITE_STATUS_FETCH_FAILURE] = state =>
  Object.assign({}, state, {
    inviteStatusIsPending: false,
    invitesRemaining: null,
    invitees: null,
  });

reducers[ACTIONS.USER_PROFILE_SAVE] = (state, action) =>
  Object.assign({}, state, {
    name: action.data.profile.name,
    dob: action.data.profile.dob,
    gender: action.data.profile.gender,
    number: action.data.profile.number,
    description: action.data.profile.description,
  });

reducers[ACTIONS.USER_PROFILE_UPDATE] = (state, action) =>
  Object.assign({}, state, {
    name: action.data.profile.name,
    dob: action.data.profile.dob,
    gender: action.data.profile.gender,
    description: action.data.profile.description,
  });

reducers[ACTIONS.SAVE_USER_HELP] = (state, action) =>
  Object.assign({}, state, {
    response: action.data.success,
  });

reducers[ACTIONS.SAVE_USER_FEEDBACK] = (state, action) =>
  Object.assign({}, state, {
    response: action.data.success,
  });

export function userReducer(state = defaultState, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
