import { combineReducers } from "redux";

import { authReducer } from "./auth/authReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
});
