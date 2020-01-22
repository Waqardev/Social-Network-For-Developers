import { TEST_DISPATCH } from "./types";

export const registerUser = userData => dispatch => {
  dispatch({
    type: TEST_DISPATCH,
    payload: userData
  });
};
