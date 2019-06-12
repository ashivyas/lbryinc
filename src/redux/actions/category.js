import Lbryio from 'lbryio';
import * as ACTIONS from 'constants/action_types';

export function doFetchCategoryList() {
  return dispatch => {
    Lbryio.call('file', 'category_list').then(res => {
      dispatch({
        type: ACTIONS.FETCH_CATEGORY_LIST,
        data: {
          categoryListing: res,
        },
      });
    });
  };
}