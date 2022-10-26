import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    directions: [],
    filters: [],
  },
  reducers: {
    directionsReceived(state, action) {
      state.directions = action.payload;
    },
    filtersReceived(state, action) {
      state.filters = action.payload;
    },
  },
});

export default dataSlice.reducer;
export const { directionsReceived, filtersReceived, dataReceived } =
  dataSlice.actions;
