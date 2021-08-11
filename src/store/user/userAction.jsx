import { STORE_USER_DATA } from "./types";

export const storeUserData = (userData) => async (dispatch) => {
  dispatch({ type: STORE_USER_DATA, payload: userData });
};
