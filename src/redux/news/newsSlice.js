import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  news: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => builder,
});

export const newsReducer = newsSlice.reducer;
