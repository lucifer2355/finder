import { combineReducers } from "redux";

import { authReducer } from "./auth/authReducer";
import { searchReducer } from "./search/searchReducer";
import { friendshipReducer } from "./friendship/friendshipReducer";

export const rootReducer = combineReducers({
  authReducer,
  searchReducer,
  friendshipReducer,
});
