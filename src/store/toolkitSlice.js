import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "directions",
  initialState: {
    count1: 0,
    directions: [],
  },
  reducers: {
    increment(state) {
      state.count1 = state.count1 + 1;
    },
    addDirections(state, action) {
      state.directions.push(action.payload);
    },
  },
});

export default toolkitSlice.reducer;
export const { increment, addDirections } = toolkitSlice.actions;
