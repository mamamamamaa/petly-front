import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {fetchUserPets, addOwnPet, deleteOneOwnPet} from './operations';

const extraActions = [fetchUserPets, addOwnPet, deleteOneOwnPet];

const initialState = {
  isLoading: false,
  error: null,
  pets:[],
//   pets: [
//     {
//         _id: "63e6da227abd9bb08eeb4b3e",
//         name: "gug",
//         dateOfBirth: "01.01.2021",
//         breed: "fog",
//         comments: "fake dog",
//         pictureURL: "https://res.cloudinary.com/dmwntn6pl/image/upload/v1676073506/v9lpd3obgcp4qsmlbtdz.jpg",
//         owner: "63e6c7f7ec1005dd15373f98"
//     },
//     {
//         _id: "63e6db058609cd6aa6d6b1f3",
//         name: "gug124",
//         dateOfBirth: "01.01.2021",
//         breed: "fog",
//         comments: "fake dog",
//         pictureURL: "https://res.cloudinary.com/dmwntn6pl/image/upload/v1676073733/eabedsieat55vp0bfp6z.jpg",
//         owner: "63e6c7f7ec1005dd15373f98"
//     },
//     {
//       _id: "63e6da220abd9bb08eeb4b3e",
//       name: "gug",
//       dateOfBirth: "01.01.2021",
//       breed: "fog",
//       comments: "fake dog",
//       pictureURL: "https://res.cloudinary.com/dmwntn6pl/image/upload/v1676073506/v9lpd3obgcp4qsmlbtdz.jpg",
//       owner: "63e6c7f7ec1005dd15373f98"
//   },
//   {
//       _id: "69e6db058609cd6aa6d6b1f3",
//       name: "gug124",
//       dateOfBirth: "01.01.2021",
//       breed: "fog",
//       comments: "fake dog",
//       pictureURL: "https://res.cloudinary.com/dmwntn6pl/image/upload/v1676073733/eabedsieat55vp0bfp6z.jpg",
//       owner: "63e6c7f7ec1005dd15373f98"
//   }
// ],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => builder
    .addCase(fetchUserPets.fulfilled, (state, action)=>{
      state.pets = action.payload;
    })
    .addCase(deleteOneOwnPet.fulfilled, (state, action)=>{
      state.pets = state.pets.filter(pet=>pet._id!==action.payload);
    })
    .addCase(addOwnPet.fulfilled, (state, action)=>{
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
        console.log("error action", action);
        state.error = action.payload;
        state.isLoading = false
      }
    )
    ,
});

export const userReducer = userSlice.reducer;