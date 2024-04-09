// src/store/store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';

const rootReducer = combineReducers({
  post: postReducer,
  // 다른 리듀서들도 여기에 추가...
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
