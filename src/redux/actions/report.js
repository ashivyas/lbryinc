import Lbryio from 'lbryio';
import { ACTIONS } from 'lbry-redux';

export function doReportType(reportType, claimId) {
  return dispatch => {
    Lbryio.call('api', 'report', { claim_id: claimId, report_type: reportType }, 'post')
      .then(() => {
        dispatch({
          type: ACTIONS.USER_REPORT_TYPE,
          data: {
            reportType,
            claimId,
          },
        });
      })
      .catch(error => {
        throw new Error(error);
      });
  };
}
