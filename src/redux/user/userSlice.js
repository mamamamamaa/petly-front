

import { createSlice
  // , isAnyOf
} from '@reduxjs/toolkit';
import { updateUserData, getUserData, updateUserAvatar } from './operations';
import {fetchUserPets, addOwnPet, deleteOneOwnPet} from './operations';

// const extraActions = [updateUserData, getUserData, fetchUserPets, addOwnPet, deleteOneOwnPet];

const initialState = {  
  user: {
    email: null,
    name: null,
    _id: null,
    city: null,
    phone: null,
    birthday: ' ',
    avatarUrl: null,
  },
  isLoading: false,
  error: null,
  pets:[],

};

const userSlice = createSlice({
  name: 'user',
  initialState,  
  extraReducers:builder=>
    builder
      .addCase(getUserData.pending, (state, action) => {
        state.error = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        // state.isLoading = false;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.phone = action.payload.phone;
        state.user.city = action.payload.city;
        state.user.avatar = action.payload.avatar;
        state.user.birthday = action.payload.birthday;
        state.isLoggedIn = true;
        console.log(state.user.avatar)
      })
      .addCase(getUserData.rejected, (state, action) => {
        //state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUserData.pending, (state, action) => {
        state.error = null;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = { ...state.data, ...action.payload };
        console.log(state.data)
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(updateUserAvatar.pending, (state, action) => {
        state.error = null;
      })
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = { ...state.data, ...action.payload };
      })
      .addCase(updateUserAvatar.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })   
        .addCase(fetchUserPets.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchUserPets.fulfilled, (state, action) => {
        state.pets = action.payload;
        state.isLoading = false;        
      })
      .addCase(fetchUserPets.rejected, (state, action) => {
        state.isLoading = false; 
        state.error = action.payload;        
      })
      .addCase(deleteOneOwnPet.pending, (state) => {   
        state.error = null;
        state.isLoading = true;
      })
      .addCase(deleteOneOwnPet.fulfilled, (state, action) => {
        state.pets = state.pets.filter(pet => pet._id !== action.payload);
        state.isLoading = false;
      })
      .addCase(deleteOneOwnPet.rejected, (state, action) => {
        state.isLoading = false; 
        state.error = action.payload;        
      })
      .addCase(addOwnPet.pending, (state) => {        
        state.error = null;
        state.isLoading = true;
      })
      .addCase(addOwnPet.fulfilled, (state, action) => {
        state.pets = [action.payload, ...state.pets];
      })
      .addCase(addOwnPet.rejected, (state, action) => {
        state.isLoading = false; 
        state.error = action.payload;        
      })
      // .addMatcher(
      //   isAnyOf(...extraActions.map(action => action.pending)),
      //   state => {
      //     state.error = null;
      //   }
      // )
      // .addMatcher(
      //   isAnyOf(...extraActions.map(action => action.rejected)),
      //   (state, action) => {
      //     state.error = action.payload;
      //   }
      // )
      // .addMatcher(
      //   isAnyOf(...extraActions.map(action => action.fulfilled)),
      //   state => {
      //     state.error = null;
      //   }
      // ),
});

export const userReducer = userSlice.reducer;



