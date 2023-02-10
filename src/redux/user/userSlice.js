import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {fetchUserPets, addOwnPet, deleteOneOwnPet} from './operations';

const extraActions = [fetchUserPets, addOwnPet, deleteOneOwnPet];

const initialState = {
  isLoading: false,
  error: null,
  pets:[],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => builder
    .addCase(fetchUserPets.fulfilled, (state, action)=>{
      state.pets = action.payload;
    })
    .addCase(deleteOneOwnPet.fulfilled, (state, action)=>{
      // console.log('state.pets', state.pets);
      // console.log('action.payload', action.payload);
      state.pets = state.pets.filter(pet=>pet._id!==action.payload._id)
    })
    .addCase(addOwnPet.fulfilled, (state, action)=>{
      // console.log('state.pets', state.pets);
      // console.log('action.payload', action.payload);
      state.pets = state.pets.push(action.payload);
    })
    .addMatcher(
      isAnyOf(...extraActions.map(action => action.pending)),
      state => {
        state.error = null;
        state.isLoading = true
      }
    )
    .addMatcher(
      isAnyOf(...extraActions.map(action => action.fulfilled)),
      state => {
        state.error = null;
        state.isLoading = false
      }
    )
    .addMatcher(
      isAnyOf(...extraActions.map(action => action.rejected)),
      (state, action) => {
        state.error = action.payload;
        state.isLoading = false
      }
    )
    ,
});

export const userReducer = userSlice.reducer;