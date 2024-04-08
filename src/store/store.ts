// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
// Import other reducers

export const store = configureStore({
  reducer: {
    post: postReducer,
    // other reducers
  },
});
