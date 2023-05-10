import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../reducers/homePageReducer";

const rootReducer = combineReducers({
  home: homePageReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
