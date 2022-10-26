import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    filterFrom: "all",
    filterFromValue: null,
    filterTo: "all",
  },
  reducers: {
    changeFilterFrom(state, action) {
      state.filterFrom = action.payload;
    },
    changeFilterFromValue(state, action) {
      state.filterFromValue = action.payload;
    },
    changeFilterTo(state, action) {
      state.filterTo = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { changeFilterFrom, changeFilterFromValue, changeFilterTo } =
  filterSlice.actions;
