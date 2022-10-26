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
    addDirections(state, action) {
      state.directions.push(action.payload);
    },
    directionsReceived(state, action) {
      // state.directions.push(action.payload);
      state.directions = action.payload;
    },
  },
});

export default toolkitSlice.reducer;
export const { increment, addDirections, directionsReceived } =
  toolkitSlice.actions;
