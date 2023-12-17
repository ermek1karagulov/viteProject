import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "../components/favorites/favorites.slice.js";
import { userSlice } from "./user/user.slice.js";
import { api } from "./api/api.js";

const reducers = combineReducers({
  favorites: favoritesReducer,
  user: userSlice,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(api.middleware),
});
