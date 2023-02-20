

import { createSlice
  // , isAnyOf
} from '@reduxjs/toolkit';
import { updateUser, getUserData, updateAvatar } from './operations';
import {fetchUserPets, addOwnPet, deleteOneOwnPet} from './operations';

// const extraActions = [updateUserData, getUserData, fetchUserPets, addOwnPet, deleteOneOwnPet];
console.log('')
const initialState = {
  user: {
    email: ' ',
    name: ' ',
    _id: ' ',
    city: ' ',
    phone: ' ',
    birthday: ' ',
    avatarURL: ' ',
  },
  isLoading: false,
  error: null,
  pets: [],
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
        //state.user.avatarURL = action.payload.avatarURL;
        state.user.birthday = action.payload.birthday;
        state.isLoggedIn = true;
        console.log(state.user.avatarURL)
      })
      .addCase(getUserData.rejected, (state, action) => {
        //state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = { ...state.data, ...action.payload };
        console.log(state.data)
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(updateAvatar.pending, (state, action) => {
        state.error = null;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = { ...state.data, ...action.payload };
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        console.log("action", action)
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



