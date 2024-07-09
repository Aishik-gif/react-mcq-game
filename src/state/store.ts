import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questions/questionSlice";

export const store = configureStore({
  reducer: {
    questions: questionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
