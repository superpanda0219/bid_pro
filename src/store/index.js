import { configureStore } from "@reduxjs/toolkit";
import mathSliceReducer from "../features/mathSlice";

export const store = configureStore({
  reducer: {
    math: mathSliceReducer
  } 
})
