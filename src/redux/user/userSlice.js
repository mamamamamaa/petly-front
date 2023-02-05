import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  news: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => builder,
});

export const userReducer = userSlice.reducer;
