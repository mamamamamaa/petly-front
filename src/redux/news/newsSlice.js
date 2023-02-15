import { createSlice } from '@reduxjs/toolkit';

import { getNews } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  news: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getNews.pending, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.isLoading = false;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const newsReducer = newsSlice.reducer;
