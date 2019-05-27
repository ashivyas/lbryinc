import * as ACTIONS from 'lbry-redux';

const reducers = {};

reducers[ACTIONS.USER_REPORT_TYPE] = (state, action) =>
  Object.assign({}, state, {
    reportType: action.data.reportType,
    claimId: action.data.claimId,
  });

export function reportReducer(state, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
