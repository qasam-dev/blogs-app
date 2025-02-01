import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../helpers/authSlice/authSlice"

export const store = configureStore({
  reducer: {
    authReducer
  },
});
