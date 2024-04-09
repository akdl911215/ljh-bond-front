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
    updatePost: (state, action: PayloadAction<{ title?: string; content?: string }>) => {
      if (state.currentPost) {
        // title 또는 content가 있으면 기존 값에 덮어씌웁니다.
        state.currentPost = {
          ...state.currentPost,
          ...action.payload,
        };
      }
    },
    deletePost: (state, action: PayloadAction<number>) => {
      if (state.currentPost && state.currentPost.id === action.payload) {
        state.currentPost = null;
      }
    },
    // 모든 상태를 초기화
    resetPost: () => initialState,
  },
});

export const { setCurrentPost, updatePost, deletePost, resetPost } = postSlice.actions;

export default postSlice.reducer;
