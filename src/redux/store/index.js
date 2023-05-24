import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../reducers/homePageReducer";
import searchReducer from "../reducers/searchReducer";
import favouritesReducer from "../reducers/favouritesReducer";

const rootReducer = combineReducers({
  home: homePageReducer,

  search: searchReducer,
  favourites: favouritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
