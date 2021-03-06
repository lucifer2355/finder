import {
  SENT_REQUEST,
  DELETE_SENT_REQUEST,
  DELETE_RECEIVED_REQUEST,
  ACCEPT_REQUEST,
  GET_SENT_REQUESTS,
  GET_RECEIVE_REQUESTS,
  GET_FRIENDS_LIST,
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
        sentRequests: state.sentRequests.concat(action.payload),
      };

    case DELETE_SENT_REQUEST:
      return {
        ...state,
        sentRequests: state.sentRequests.filter((id) => id !== action.payload),
      };

    case DELETE_RECEIVED_REQUEST:
      return {
        ...state,
        receiveRequests: state.receiveRequests.filter(
          (data) => data.id !== action.payload
        ),
      };

    case ACCEPT_REQUEST:
      return {
        ...state,
        friends: state.friends.concat(action.payload),
      };

    case GET_SENT_REQUESTS:
      return {
        ...state,
        sentRequests: action.payload,
      };

    case GET_RECEIVE_REQUESTS:
      return {
        ...state,
        receiveRequests: action.payload,
      };

    case GET_FRIENDS_LIST:
      return {
        ...state,
        friends: action.payload,
      };

    default:
      return state;
  }
};
