import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { login, logout, register, current, refresh } from './operations';

const extraActions = [login, logout, register, current, refresh];

const initialState = {
  user: { name: null, email: null },
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.accessToken = action.payload.accessToken;
        state.expiresIn = action.payload.expiresIn;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.accessToken = action.payload.accessToken;
        state.expiresIn = action.payload.expiresIn;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(current.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.user.refreshToken = action.payload.refreshToken;
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
        state.user = { name: null, email: null };
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
