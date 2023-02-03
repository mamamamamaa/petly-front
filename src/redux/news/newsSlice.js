import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => builder,
});

export const newsReducer = newsSlice.reducer;
