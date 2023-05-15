import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../reducers/homePageReducer";
import usersReducer from "../reducers/usersReducer";

const rootReducer = combineReducers({
  home: homePageReducer,
  users: usersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
