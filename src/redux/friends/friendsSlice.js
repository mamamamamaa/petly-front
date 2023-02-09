import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import fetchContacts from './operations';
const extraActions = [fetchContacts];
const getActionsWithType = type =>
  extraActions.map(extraAction => extraAction[type]);
const handleFetchContactsReducer = (state, action) => {
  state.items = action.payload;
};
const anyFulfielledReducer = state => {
  state.isLoading = false;
  state.error = null;
};
const anyPendingReducer = state => {
  state.isLoading = true;
};
const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  isLoading: false,
  error: null,
  friends: [],
};
const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsReducer)
      .addMatcher(
        isAnyOf(...getActionsWithType('fulfilled')),
        anyFulfielledReducer
      )
      .addMatcher(isAnyOf(...getActionsWithType('pending')), anyPendingReducer)
      .addMatcher(
        isAnyOf(...getActionsWithType('rejected')),
        anyRejectedReducer
      ),
});

export const friendsReducer = friendsSlice.reducer;
