import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../reducers/homePageReducer";
import usersReducer from "../reducers/usersReducer";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  home: homePageReducer,
  users: usersReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
