// src/store/postSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../components/types';

interface PostState {
  currentPost: Post | null;
}

const initialState: PostState = {
  currentPost: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setCurrentPost: (state, action: PayloadAction<Post | null>) => {
      state.currentPost = action.payload;
    },
    updatePost: (state, action: PayloadAction<Partial<Post>>) => {
      if (state.currentPost) {
        state.currentPost = { ...state.currentPost, ...action.payload };
      }
    },
    // 모든 상태를 초기화
    resetPost: () => initialState,
  },
});

export const { setCurrentPost, updatePost, resetPost } = postSlice.actions;

export default postSlice.reducer;
