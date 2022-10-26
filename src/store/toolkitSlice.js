import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
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

export default toolkitSlice.reducer;
export const { directionsReceived, filtersReceived } = toolkitSlice.actions;
