import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    filterFrom: "all",
    filterTo: "all",
  },
  reducers: {
    changeFilterFrom(state, action) {
      state.filterFrom = action.payload;
    },
    changeFilterTo(state, action) {
      state.filterTo = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { changeFilterFrom, changeFilterTo } = filterSlice.actions;
