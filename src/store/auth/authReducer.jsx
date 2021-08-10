import {
  LOGIN_START,
  LOGIN_COMPLETE,
  LOGIN_FAILED,
  REGISTRATION_START,
  REGISTRATION_COMPLETE,
  REGISTRATION_FAILED,
} from "./types";

const initialState = {
  isLoading: false,
  userData: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_COMPLETE:
      return {
        isLoading: false,
        userData: action.payload,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case REGISTRATION_START:
      return {
        ...state,
        isLoading: true,
      };

    case REGISTRATION_COMPLETE:
      return {
        ...state,
        isLoading: false,
      };

    case REGISTRATION_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
