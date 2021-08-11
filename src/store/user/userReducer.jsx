import { STORE_USER_DATA } from "./types";

const initialState = {
  userData: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER_DATA:
      return {
        userData: action.payload,
      };

    default:
      return state;
  }
};
