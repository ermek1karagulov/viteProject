import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    togglefavorites: (state, { payload: recipe }) => {
      const isExists = state.some((r) => r.id === recipe.id);

      if (isExists) {
        const index = state.findIndex((item) => item.id === recipe.id);
        if (index !== -1) state.splice(index, 1);
      } else {
        state.push(recipe);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
