import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../reducers/homePageReducer";
import usersReducer from "../reducers/usersReducer";
import searchReducer from "../reducers/searchReducer";
import favouritesReducer from "../reducers/favouritesReducer";

const rootReducer = combineReducers({
  home: homePageReducer,
  users: usersReducer,
  search: searchReducer,
  favourites: favouritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
