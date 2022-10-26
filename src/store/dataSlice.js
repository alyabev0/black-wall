import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    directions: [],
    filters: [],
  },
  reducers: {
    dataReceived(state, action) {
      [state.directions, state.filters] = [action.payload];
    },
  },
});

export default dataSlice.reducer;
export const { dataReceived } = dataSlice.actions;
