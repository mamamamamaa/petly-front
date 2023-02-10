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
    avatar: '',
    favorites: [],
    
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  // extraReducers: {

  //   //get user info ? 
  //   //update user
  //   [updateUserData.pending](state) {
  //     state.error = null;
  //   },
  //   [updateUserData.fulfilled](state, action) {
  //     //state.isLoading = false;
  //     //state.error = null;
  //     state.data = {...state.data,  ...action.payload };
  //   },
  //   [updateUserData.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
    extraReducers(builder) {
        builder
            .addCase(updateUserData.pending, (state, action) => {
                state.error = null;
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                state.status = "succeeded"
               state.data = {...state.data,  ...action.payload };
            })
            .addCase(updateUserData.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            
            }


     //builder => builder,
});

export const userReducer = userSlice.reducer;
