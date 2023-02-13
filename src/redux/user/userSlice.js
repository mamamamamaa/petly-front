
import { createSlice, isAnyOf} from '@reduxjs/toolkit';
import { updateUserData, getUserData } from './operations';
import {fetchUserPets, addOwnPet, deleteOneOwnPet} from './operations';

const extraActions = [updateUserData, getUserData, fetchUserPets, addOwnPet, deleteOneOwnPet];

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
        state.isLoading = false;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.phone = action.payload.phone;
        state.user.city = action.payload.city;
        state.user.avatar = action.payload.avatar;
        state.user.birthday = action.payload.birthday;
        state.isLoggedIn = true;
        
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
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(fetchUserPets.fulfilled, (state, action) => {
        console.log('state', state);
        console.log('action', action);
        state.pets = action.payload;
        console.log('state', state);
      })
      .addCase(deleteOneOwnPet.fulfilled, (state, action) => {
        console.log('state', state);
        console.log('action', action);
        state.pets = state.pets.filter(pet => pet._id !== action.payload);
      })
      .addCase(addOwnPet.fulfilled, (state, action) => {
        console.log('state.pets', state.pets);
        console.log('action.payload', action.payload);
        state.pets = state.pets.push(action.payload);
        console.log('state.pets', state.pets);
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

export const userReducer = userSlice.reducer;