import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "../components/favorites/favorites.slice.js";

const reducers = combineReducers({
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: reducers,
});
