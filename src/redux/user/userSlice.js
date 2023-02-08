import { createSlice } from '@reduxjs/toolkit';
import { updateUserData } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  news: [],
  data: {
    name: '',
    email: '',
    birthday: '',
    phone: '',
    city: '',
    favorites: [],
    
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {

    //get user info ? 
    //update user
    [updateUserData.pending](state) {
      state.erroe = null;
    },
    [updateUserData.fulfilled](state, action) {
      //state.isLoading = false;
      //state.error = null;
      state.data = {...state.data,  ...action.payload };
    },
    [updateUserData.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
     //builder => builder,
});

export const userReducer = userSlice.reducer;
