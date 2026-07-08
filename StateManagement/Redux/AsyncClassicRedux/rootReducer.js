import { combineReducers } from "redux";

import asyncReducer from "./asyncReducer";

const rootReducer = combineReducers({
  users: asyncReducer,
});

export default rootReducer;
