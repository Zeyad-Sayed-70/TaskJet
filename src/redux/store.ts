"use client";
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/slice";
import TaskReducer from "./tasks/slice";
import LinkedInReducer from "./linkedIn/slice";
import UserReducer from "./user/slice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    task: TaskReducer,
    linkedin: LinkedInReducer,
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const BACKEND_URL = "http://localhost:5000";
