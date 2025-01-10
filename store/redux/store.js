import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favorites";

const store = configureStore({
  reducer: {
    favoriteReducer,
  },
});

export default store;
