import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "directions",
  initialState: {
    count: 0,
    directions: [],
    filters: [],
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    directionsReceived(state, action) {
      state.directions = action.payload;
    },
  },
});

export default toolkitSlice.reducer;
export const { increment, addDirections, directionsReceived } =
  toolkitSlice.actions;
