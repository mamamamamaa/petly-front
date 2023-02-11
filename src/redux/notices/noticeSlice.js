import { createSlice } from '@reduxjs/toolkit';
import { sell } from './operations';

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
  extraReducers: builder =>
    builder
      .addCase(sell.pending, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(sell.fulfilled, (state, action) => {
        state.sellNotices = action.payload;
        state.isLoading = false;
      })
      .addCase(sell.rejected, (state, action) => {
        state.isLoading = false;
      }),
});

export const noticeReducer = noticeSlice.reducer;
