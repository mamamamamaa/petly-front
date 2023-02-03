import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  extraReducers: builder => builder,
});

export const noticeReducer = noticeSlice.reducer;
