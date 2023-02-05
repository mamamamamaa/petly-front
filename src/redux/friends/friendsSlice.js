import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  friends: [],
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  extraReducers: builder => builder,
});

export const friendsReducer = friendsSlice.reducer;
