import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitReducer";

const rootReducer = {
  toolkit: toolkitReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
