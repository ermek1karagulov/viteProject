import { createSlice } from "@reduxjs/toolkit";
import { GetUserById } from "./user.actions";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(GetUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.user = {};
      });
  },
});
