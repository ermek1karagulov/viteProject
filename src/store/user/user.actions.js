import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: "MAx" }, 1000))
  );

export const GetUserById = createAsyncThunk(
  "user/by-id",
  async (userId, thunkApi) => {
    try {
      const response = await fetchUserById(userId);
      return response;
    } catch (error) {
      thunkApi.rejectWithValue({});
    }
  }
);
