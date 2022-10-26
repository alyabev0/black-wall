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
    dataReceived(state, action) {
      [state.directions, state.filters] = [action.payload];
      console.log(state.data);
    },
  },
});

export default dataSlice.reducer;
export const { directionsReceived, filtersReceived, dataReceived } =
  dataSlice.actions;
