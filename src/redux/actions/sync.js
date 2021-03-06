import * as ACTIONS from 'constants/action_types';
import Lbryio from 'lbryio';
import { Lbry } from 'lbry-redux';

export function doSetSync(oldHash, newHash, data) {
  return dispatch => {
    dispatch({
      type: ACTIONS.SET_SYNC_STARTED,
    });

    Lbryio.call('sync', 'set', { old_hash: oldHash, new_hash: newHash, data }, 'post')
      .then(response => {
        if (!response.hash) {
          return dispatch({
            type: ACTIONS.SET_SYNC_FAILED,
            data: { error: 'No hash returned for sync/set.' },
          });
        }

        return dispatch({
          type: ACTIONS.SET_SYNC_COMPLETED,
          data: { syncHash: response.hash },
        });
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.SET_SYNC_FAILED,
          data: { error },
        });
      });
  };
}

export function doSetDefaultAccount() {
  return dispatch => {
    dispatch({
      type: ACTIONS.SET_DEFAULT_ACCOUNT,
    });

    Lbry.account_list().then(accountList => {
      const { lbc_mainnet: accounts } = accountList;
      let defaultId;
      for (let i = 0; i < accounts.length; ++i) {
        if (accounts[i].satoshis > 0) {
          defaultId = accounts[i].id;
          break;
        }
      }

      // In a case where there's no balance on either account
      // assume the second (which is created after sync) as default
      if (!defaultId && accounts.length > 1) {
        defaultId = accounts[1].id;
      }

      // Set the default account
      if (defaultId) {
        Lbry.account_set({ account_id: defaultId, default: true });
      }
    });
  };
}

export function doGetSync(password) {
  return dispatch => {
    dispatch({
      type: ACTIONS.GET_SYNC_STARTED,
    });

    Lbry.sync_hash().then(hash => {
      Lbryio.call('sync', 'get', { hash }, 'post')
        .then(response => {
          const data = { hasSyncedWallet: true };
          if (response.changed) {
            const syncHash = response.hash;
            data.syncHash = syncHash;
            Lbry.sync_apply({ password, data: response.data }).then(
              ({ hash: walletHash, data: walletData }) => {
                if (walletHash !== syncHash) {
                  // different local hash, need to synchronise
                  dispatch(doSetSync(syncHash, walletHash, walletData));
                }

                // set the default account
                dispatch(doSetDefaultAccount());
              }
            );
          }

          dispatch({ type: ACTIONS.GET_SYNC_COMPLETED, data });
        })
        .catch(() => {
          // user doesn't have a synced wallet
          dispatch({
            type: ACTIONS.GET_SYNC_COMPLETED,
            data: { hasSyncedWallet: false, syncHash: null },
          });

          // call sync_apply to get data to sync
          // first time sync. use any string for old hash
          Lbry.sync_apply({ password }).then(({ hash: walletHash, data }) =>
            dispatch(doSetSync(null, walletHash, data))
          );
        });
    });
  };
}
