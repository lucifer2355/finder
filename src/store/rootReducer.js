import { combineReducers } from "redux";

import { authReducer } from "./auth/authReducer";
import searchReducer from "./search/searchAction";

export const rootReducer = combineReducers({
  authReducer,
  searchReducer,
});
