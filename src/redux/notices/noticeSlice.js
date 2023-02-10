import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  sellNotices: [],
  goodHandsNotices: [],
  LostFondNotices: [],
  searchNotices: [],
};

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  extraReducers: builder => builder,
});

export const noticeReducer = noticeSlice.reducer;
