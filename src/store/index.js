import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";

const rootReducer = {
  toolkit: toolkitSlice,
};

export const store = configureStore({
  reducer: rootReducer,
});
