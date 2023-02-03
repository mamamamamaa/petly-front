import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => builder,
});

export const userReducer = userSlice.reducer;
