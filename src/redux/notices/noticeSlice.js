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
  deleteNoticeFromFav,
  addNoticeToFav,
  search,
} from './operations';

const initialState = {
  isLoading: false,
  error: null,
  pages: {
    sell: 1,
    goodHands: 1,
    lostFound: 1,
    favorite: 1,
    myAds: 1,
    search: 1,
  },
  totalCounts: {
    sell: 1,
    goodHands: 1,
    lostFound: 1,
    favorite: 1,
    myAds: 1,
    search: 1,
  },
  sellNotices: [],
  goodHandsNotices: [],
  lostFoundNotices: [],
  favoriteNotices: [],
  myAdsNotices: [],
  searchNotices: [],
  notices: [],
  currentNotice: null,
  query: '',
};

const findNotice = (state, id, type) => {
  switch (type) {
    case 'sell':
      state.sellNotices.find(notice => notice._id === id);
      break;
    case 'good-hands':
      state.goodHandsNotices.find(notice => notice._id === id);
      break;
    case 'lost/found':
      state.lostFoundNotices.find(notice => notice._id === id);

      break;
    default:
      console.log('Done');
  }
};

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
      if (action.payload === '') {
        state.searchNotices = [];
      }
    },
    clearCurrentNotice(state) {
      state.currentNotice = null;
    },
  },
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
      .addCase(search.pending, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.searchNotices = action.payload;
        state.isLoading = false;
      })
      .addCase(search.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addNoticeToFav.pending, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addNoticeToFav.fulfilled, (state, action) => {
        const { id, type } = action.payload;

        const notice = findNotice(state, id, type);

        if (notice) {
          state.favoriteNotices.push(notice);
        }
      })
      .addCase(addNoticeToFav.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteNoticeFromFav.pending, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteNoticeFromFav.fulfilled, (state, action) => {
        state.favoriteNotices = state.favoriteNotices.filter(
          ({ _id }) => _id !== action.payload
        );
        state.isLoading = false;
      })
      .addCase(deleteNoticeFromFav.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(sell.pending, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(sell.fulfilled, (state, action) => {
        state.sellNotices = [...state.sellNotices, ...action.payload.data];
        state.pages.sell += 1;
        state.totalCounts.sell = action.payload.data.totalCount;
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
        state.goodHandsNotices = [
          ...state.goodHandsNotices,
          ...action.payload.data.items,
        ];
        state.pages.goodHands += 1;
        state.totalCounts.goodHands = action.payload.data.totalCount;
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
        state.lostFoundNotices = [
          ...state.lostFoundNotices,
          ...action.payload.data.items,
        ];
        state.pages.lostFound += 1;
        state.totalCounts.lostFound = action.payload.data.totalCount;
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
        state.myAdsNotices.filter(({ _id }) => _id !== id);
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
        state.favoriteNotices = [
          ...state.favoriteNotices,
          ...action.payload.data.items,
        ];
        state.pages.favorite += 1;
        state.totalCounts.favorite = action.payload.data.totalCount;
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
        state.myAdsNotices = [
          ...state.myAdsNotices,
          ...action.payload.data.items,
        ];
        state.pages.myAds += 1;
        state.totalCounts.myAds = action.payload.data.totalCount;
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

export const { setQuery, clearCurrentNotice } = noticeSlice.actions;
