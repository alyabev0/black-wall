import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "directions",
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
export const { directionsReceived, filtersReceived } = dataSlice.actions;
