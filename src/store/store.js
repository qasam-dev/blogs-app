import { configureStore } from "@reduxjs/toolkit";
import auth from "../helpers/authSlice/authSlice";

export const store = configureStore({
  reducer: {
    auth,
  },
});
