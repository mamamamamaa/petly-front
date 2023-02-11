import { createSlice, isAnyOf} from '@reduxjs/toolkit';
import { updateUserData, getUserData } from './operations';

const extraActions = [updateUserData, getUserData];

const initialState = {  
  news: [],
  user: {
    email: null,
    name: null,
    _id: null,
    city: null,
    phone: null,
    birthday: ' ',
    avatar: null,
    favorites: [],    
  },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  
  extraReducers(builder) {
    builder
      .addCase(getUserData.pending, (state, action) => {
        state.error = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        // state.isLoading = false;
        // state.error = null;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.phone = action.payload.phone;
        state.user.city = action.payload.city;
        state.user.avatar = action.payload.avatar;
        state.user.birthday = action.payload.birthday;
        state.isLoggedIn = true;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.error = action.payload;
        
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
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.pending)),
        state => {
          state.error = null;
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
    
  }
     //builder => builder,
});

export const userReducer = userSlice.reducer;
