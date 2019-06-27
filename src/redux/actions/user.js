import { ACTIONS, Lbry, doToast } from 'lbry-redux';
import { doRewardList } from 'redux/actions/rewards';
import { doFetchFeaturedUris } from 'redux/actions/homepage';
import {
  selectEmailToVerify,
  selectPhoneToVerify,
  // selectUserCountryCode,
} from 'redux/selectors/user';
import Lbryio from 'lbryio';

export function doFetchInviteStatus() {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_INVITE_STATUS_FETCH_STARTED,
    });

    Promise.all([Lbryio.call('user', 'invite_status'), Lbryio.call('user_referral_code', 'list')])
      .then(([status, code]) => {
        dispatch(doRewardList());

        dispatch({
          type: ACTIONS.USER_INVITE_STATUS_FETCH_SUCCESS,
          data: {
            invitesRemaining: status.invites_remaining ? status.invites_remaining : 0,
            invitees: status.invitees,
            referralLink: `${Lbryio.CONNECTION_STRING}user/refer?r=${code}`,
          },
        });
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.USER_INVITE_STATUS_FETCH_FAILURE,
          data: { error },
        });
      });
  };
}

export function doInstallNew(appVersion, os = null) {
  const payload = { app_version: appVersion };
  Lbry.status().then(status => {
    payload.app_id = status.installation_id;
    payload.node_id = status.lbry_id;
    Lbry.version().then(version => {
      payload.daemon_version = version.lbrynet_version;
      payload.operating_system = os || version.os_system;
      payload.platform = version.platform;
      Lbryio.call('install', 'new', payload);
    });
  });
}

// TODO: Call doInstallNew separately so we don't have to pass appVersion and os_system params?
export function doAuthenticate() {
  return dispatch => {
    dispatch({
      type: ACTIONS.AUTHENTICATION_STARTED,
    });

    Lbryio.authenticate()
      .then(user => {
        // analytics.setUser(user);
        dispatch({
          type: ACTIONS.AUTHENTICATION_SUCCESS,
          data: { user },
        });
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.AUTHENTICATION_FAILURE,
          data: { error },
        });
      });
  };
}

export function doUserFetch() {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_FETCH_STARTED,
    });
    Lbryio.getCurrentUser()
      .then(user => {
        // analytics.setUser(user);
        dispatch(doRewardList());

        dispatch({
          type: ACTIONS.USER_FETCH_SUCCESS,
          data: { user },
        });
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.USER_FETCH_FAILURE,
          data: { error },
        });
      });
  };
}

export function doUserCheckEmailVerified() {
  // This will happen in the background so we don't need loading booleans
  return dispatch => {
    Lbryio.getCurrentUser().then(user => {
      if (user.has_verified_email) {
        dispatch(doRewardList());

        dispatch({
          type: ACTIONS.USER_FETCH_SUCCESS,
          data: { user },
        });
      }
    });
  };
}

export function doUserPhoneReset() {
  return {
    type: ACTIONS.USER_PHONE_RESET,
  };
}

export function doUserPhoneNew(phone, countryCode) {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_PHONE_NEW_STARTED,
      data: { phone, country_code: countryCode },
    });

    const success = () => {
      dispatch({
        type: ACTIONS.USER_PHONE_NEW_SUCCESS,
        data: { phone },
      });
    };

    const failure = error => {
      dispatch({
        type: ACTIONS.USER_PHONE_NEW_FAILURE,
        data: { error },
      });
    };

    Lbryio.call('user_mobile', 'new', { mobileNo: phone }, 'post').then(success, failure);
  };
}

export function doUserPhoneVerifyFailure(error) {
  return {
    type: ACTIONS.USER_PHONE_VERIFY_FAILURE,
    data: { error },
  };
}

export function doUserPhoneVerify(verificationCode) {
  return (dispatch, getState) => {
    const phoneNumber = selectPhoneToVerify(getState());
    // const countryCode = selectUserCountryCode(getState());

    dispatch({
      type: ACTIONS.USER_PHONE_VERIFY_STARTED,
      code: verificationCode,
    });

    Lbryio.call(
      'user_mobile',
      'phone_number_confirm',
      {
        verification_code: verificationCode,
        mobileNo: phoneNumber,
        // country_code: countryCode,
      },
      'post'
    )
      .then(user => {
        if (user.is_identity_verified) {
          dispatch({
            type: ACTIONS.USER_PHONE_VERIFY_SUCCESS,
            data: { user },
          });
          dispatch(doFetchFeaturedUris());
        }
      })
      .catch(error => dispatch(doUserPhoneVerifyFailure(error)));
  };
}

export function doUserMobileVerify(mobileNo, verificationCode) {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_PHONE_VERIFY_STARTED,
      code: verificationCode,
    });

    Lbryio.call(
      'user_mobile',
      'phone_number_confirm',
      {
        verification_code: verificationCode,
        mobileNo,
        // country_code: countryCode,
      },
      'post'
    )
      .then(user => {
        if (user.is_identity_verified) {
          dispatch({
            type: ACTIONS.USER_PHONE_VERIFY_SUCCESS,
            data: { user },
          });
          dispatch(doFetchFeaturedUris());
        }
      })
      .catch(error => dispatch(doUserPhoneVerifyFailure(error)));
  };
}

export function doUserLogout() {
  return dispatch => {
    Lbryio.call('user', 'logout', {}, 'post').then(data => {
      if (data.user_id === '' || data.user_id === null || data.user_id === undefined) {
        dispatch({
          type: ACTIONS.USER_LOGOUT_SUCCESS,
          data: { data },
        });
      }
    });
  };
}

// eslint-disable-next-line camelcase
export function doUserReport(report_type, report_reason, claim_id) {
  return dispatch => {
    Lbryio.call(
      'api',
      'report',
      {
        report_type,
        report_reason,
        claim_id,
      },
      'post'
    ).then(data => {
      dispatch({
        type: ACTIONS.USER_REPORT_SUCCESS,
        data: { data },
      });
    });
  };
}

export function doUserEmailToVerify(email) {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_EMAIL_VERIFY_SET,
      data: { email },
    });
  };
}

export function doUserEmailNew(email, password) {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_EMAIL_NEW_STARTED,
      email,
    });

    const success = () => {
      dispatch({
        type: ACTIONS.USER_EMAIL_NEW_SUCCESS,
        data: { email },
      });
      dispatch(doUserFetch());
    };

    const failure = error => {
      dispatch({
        type: ACTIONS.USER_EMAIL_NEW_FAILURE,
        data: { error },
      });
    };

    Lbryio.call('user_email', 'new', { email, password, send_verification_email: true }, 'post')
      .catch(error => {
        if (error.response && error.response.status === 409) {
          return Lbryio.call(
            'user_email',
            'resend_token',
            { email, only_if_expired: true },
            'post'
          ).then(success, failure);
        }
        throw error;
      })
      .then(success, failure);
  };
}

export function doUserEmailLogin(email, password) {
  return dispatch => {
    Lbryio.call('user_email', 'login', { email, password }, 'post')
      .then(data => {
        dispatch({
          type: ACTIONS.USER_EMAIL_LOGIN,
          data: { data },
        });
        dispatch(doFetchFeaturedUris());
      })
      .catch(error => {
        throw new Error('User Email Login Error ', error);
      });
  };
}

export function doUserResendVerificationEmail(email) {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_EMAIL_VERIFY_RETRY,
      email,
    });

    const success = () => {
      dispatch({
        type: ACTIONS.USER_EMAIL_NEW_SUCCESS,
        data: { email },
      });
      dispatch(doUserFetch());
    };

    const failure = error => {
      dispatch({
        type: ACTIONS.USER_EMAIL_NEW_FAILURE,
        data: { error },
      });
    };

    Lbryio.call('user_email', 'resend_token', { email }, 'post')
      .catch(error => {
        if (error.response && error.response.status === 409) {
          throw error;
        }
      })
      .then(success, failure);
  };
}

export function doUserEmailVerifyFailure(error) {
  return {
    type: ACTIONS.USER_EMAIL_VERIFY_FAILURE,
    data: { error },
  };
}

export function doUserEmailVerify(verificationToken, recaptcha) {
  return (dispatch, getState) => {
    const email = selectEmailToVerify(getState());

    dispatch({
      type: ACTIONS.USER_EMAIL_VERIFY_STARTED,
      code: verificationToken,
      recaptcha,
    });

    Lbryio.call(
      'user_email',
      'confirm',
      {
        verification_token: verificationToken,
        email,
        recaptcha,
      },
      'post'
    )
      .then(userEmail => {
        if (userEmail.is_verified) {
          dispatch({
            type: ACTIONS.USER_EMAIL_VERIFY_SUCCESS,
            data: { email },
          });
          dispatch(doUserFetch());
        } else {
          throw new Error('Your email is still not verified.'); // shouldn't happen
        }
      })
      .catch(error => dispatch(doUserEmailVerifyFailure(error)));
  };
}

export function doFetchAccessToken() {
  return dispatch => {
    const success = token =>
      dispatch({
        type: ACTIONS.FETCH_ACCESS_TOKEN_SUCCESS,
        data: { token },
      });
    Lbryio.getAuthToken().then(success);
  };
}

export function doUserIdentityVerify(stripeToken) {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_IDENTITY_VERIFY_STARTED,
      token: stripeToken,
    });

    Lbryio.call('user', 'verify_identity', { stripe_token: stripeToken }, 'post')
      .then(user => {
        if (user.is_identity_verified) {
          dispatch({
            type: ACTIONS.USER_IDENTITY_VERIFY_SUCCESS,
            data: { user },
          });
        } else {
          throw new Error('Your identity is still not verified. This should not happen.'); // shouldn't happen
        }
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.USER_IDENTITY_VERIFY_FAILURE,
          data: { error: error.toString() },
        });
      });
  };
}

export function doUserInviteNew(email) {
  return dispatch => {
    dispatch({
      type: ACTIONS.USER_INVITE_NEW_STARTED,
    });

    Lbryio.call('user', 'invite', { email }, 'post')
      .then(() => {
        dispatch({
          type: ACTIONS.USER_INVITE_NEW_SUCCESS,
          data: { email },
        });

        dispatch(
          doToast({
            message: __('Invite sent to %s', email),
          })
        );

        dispatch(doFetchInviteStatus());
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.USER_INVITE_NEW_FAILURE,
          data: { error },
        });
      });
  };
}

export function doUserCheckId(input) {
  return dispatch => {
    Lbryio.call('user', 'check_id', { input }, 'post')
      .then(user => {
        if (user.type === 'mobile') {
          dispatch({
            type: ACTIONS.USER_VERIFY_ID,
            data: { user },
          });
          // dispatch(doUserPhoneNew(user.value));
        } else if (user.type === 'email') {
          dispatch({
            type: ACTIONS.USER_VERIFY_ID,
            data: { user },
          });
          dispatch(doUserEmailNew());
        } else throw new Error('Your email or mobile check gone wrong in Api');
      })
      .catch(error => {
        throw new Error('User receiving Error ', error);
      });
  };
}

export function doUserProfileSave(name, dob, number, gender, description) {
  return dispatch => {
    Lbryio.call('user', 'profile_save', { name, dob, number, gender, description }, 'post').then(
      userData => {
        dispatch({
          type: ACTIONS.USER_PROFILE_SAVE,
          data: userData.data,
        });
      }
    );
  };
}

export function doUserProfileUpdate(name, dob, gender, description) {
  return dispatch => {
    Lbryio.call('user', 'profile_update', { name, dob, gender, description }, 'post').then(
      userData => {
        dispatch({
          type: ACTIONS.USER_PROFILE_UPDATE,
          data: userData.data,
        });
      }
    );
  };
}

export function doSaveUserHelp(issue, message) {
  return dispatch => {
    Lbryio.call('helpandfeedback', 'help', { issue, message }, 'post').then(response => {
      dispatch({
        type: ACTIONS.SAVE_USER_HELP,
        data: response,
      });
    });
  };
}

export function doSaveUserFeedback(value1, value2, value3, value4) {
  const feedbackObj = {
    param1: {
      value: value1,
    },
    param2: {
      value: value2,
    },
    param3: {
      value: value3,
    },
    param4: {
      value: value4,
    },
  };
  return dispatch => {
    Lbryio.call('helpandfeedback', 'feedback', feedbackObj, 'post').then(response => {
      dispatch({
        type: ACTIONS.SAVE_USER_FEEDBACK,
        data: response,
      });
    });
  };
}
