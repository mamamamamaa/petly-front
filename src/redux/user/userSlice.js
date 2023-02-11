import { createSlice, isAnyOf} from '@reduxjs/toolkit';
import { updateUserData } from './operations';

const extraActions = [updateUserData];

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
  
  extraReducers(builder) {
    builder
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
