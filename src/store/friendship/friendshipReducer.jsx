import {
  SENT_REQUEST,
  DELETE_SENT_REQUEST,
  DELETE_RECEIVED_REQUEST,
  ACCEPT_REQUEST,
} from "./types";

const initialState = {
  sentRequests: [],
  receiveRequests: [],
  friends: [],
};

export const friendshipReducer = (state = initialState, action) => {
  switch (action.type) {
    case SENT_REQUEST:
      return {
        ...state,
        sentRequests: state.sentRequests.push(action.payload),
      };

    case DELETE_SENT_REQUEST:
      return {
        ...state,
        sentRequests: state.sentRequests.filter((id) => id !== action.payload),
      };

    case DELETE_RECEIVED_REQUEST:
      return {
        ...state,
        regenerate: state.receiveRequests.filter((id) => id !== action.payload),
      };

    case ACCEPT_REQUEST:
      return {
        ...state,
        friends: state.friends(action.payload),
      };

    default:
      return state;
  }
};
