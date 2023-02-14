import { createSlice } from '@reduxjs/toolkit';
import {
  deleteNotice,
  addNotice,
  goodHands,
  lostFound,
  sell,
  getNoticeById,
  favorite,
  myAds,
} from './operations';

const initialState = {
  isLoading: false,
  error: null,
  sellNotices: [],
  goodHandsNotices: [],
  lostFoundNotices: [],
  favoriteNotices: [],
  myAdsNotices: [],
  searchNotices: [],
  notices: [],
  currentNotice: null,
};

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getNoticeById.pending, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getNoticeById.fulfilled, (state, action) => {
        state.currentNotice = action.payload;
        state.isLoading = false;
      })
      .addCase(getNoticeById.rejected, (state, action) => {
        state.isLoading = false;
      })
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
      })
      .addCase(goodHands.pending, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(goodHands.fulfilled, (state, action) => {
        state.goodHandsNotices = action.payload;
        state.isLoading = false;
      })
      .addCase(goodHands.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(lostFound.pending, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(lostFound.fulfilled, (state, action) => {
        state.lostFoundNotices = action.payload;
        state.isLoading = false;
      })
      .addCase(lostFound.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteNotice.pending, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteNotice.fulfilled, (state, action) => {
        const { id, type } = action.payload;
        switch (type) {
          case 'sell':
            state.sellNotices.filter(({ _id }) => _id !== id);
            break;
          case 'lost/found':
            state.lostFoundNotices.filter(({ _id }) => _id !== id);
            break;
          case 'good-hands':
            state.goodHandsNotices.filter(({ _id }) => _id !== id);
            break;
          default:
            break;
        }
        state.sellNotices = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteNotice.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(favorite.pending, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(favorite.fulfilled, (state, action) => {
        state.favoriteNotices = action.payload;
        state.isLoading = false;
      })
      .addCase(favorite.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(myAds.pending, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(myAds.fulfilled, (state, action) => {
        state.myAdsNotices = action.payload;
        state.isLoading = false;
      })
      .addCase(myAds.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addNotice.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        state.notices = [action.payload, ...state.notices];
      })
      .addCase(addNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const noticeReducer = noticeSlice.reducer;
