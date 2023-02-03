import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  extraReducers: builder => builder,
});

export const serviceReducer = serviceSlice.reducer;
