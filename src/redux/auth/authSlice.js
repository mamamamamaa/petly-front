import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  login,
  logout,
  register,
  current,
  refresh,
  reverify,
} from './operations';

const extraActions = [login, logout, register, current, refresh, reverify];

const initialState = {
  user: { name: null, email: null, favorite: [], id: null },
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
  isLoggedIn: false,
  isRefreshing: false,
  verifyPart: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addFav(state, action) {
      state.user.favorite.unshift(action.payload);
    },
    delFav(state, action) {
      state.user.favorite = state.user.favorite.filter(
        fav => fav !== action.payload
      );
    },
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.verifyPart = true;
        state.user.email = action.payload.email;
      })
      .addCase(register.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.user.favorite = action.payload.favorite;
        state.user.id = action.payload.id;
        state.accessToken = action.payload.accessToken;
        state.expiresIn = action.payload.expiresIn;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(login.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(current.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.user.favorite = action.payload.favorite;
        state.user.id = action.payload.id;
        state.refreshToken = action.payload.refreshToken;
        state.expiresIn = action.payload.expiresIn;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(current.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.expiresIn = action.payload.expiresIn;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { name: null, email: null, favorite: [], id: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.pending)),
        state => {
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.rejected)),
        (state, action) => {
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.fulfilled)),
        state => {
          state.error = null;
        }
      ),
});

export const authReducer = authSlice.reducer;
export const { addFav, delFav } = authSlice.actions;
