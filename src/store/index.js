import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import filterSlice from "./filterSlice";

const rootReducer = {
  data: dataSlice,
  filter: filterSlice,
};

export const store = configureStore({
  reducer: rootReducer,
});
