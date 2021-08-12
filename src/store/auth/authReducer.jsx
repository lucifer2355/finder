import {
  LOGIN_START,
  LOGIN_COMPLETE,
  LOGIN_FAILED,
  REGISTRATION_START,
  REGISTRATION_COMPLETE,
  REGISTRATION_FAILED,
  STORE_USER_DATA,
  UPDATE_USER_DATA_START,
  UPDATE_USER_DATA_COMPLETE,
  UPDATE_USER_DATA_FAILED,
  LOGOUT,
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

    case STORE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
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

    case UPDATE_USER_DATA_START:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_USER_DATA_COMPLETE:
      return {
        isLoading: false,
        userData: action.payload,
      };

    case UPDATE_USER_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case LOGOUT:
      return {
        ...state,
        userData: null,
      };

    default:
      return state;
  }
};
