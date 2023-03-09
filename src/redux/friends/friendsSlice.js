import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchFriends, fetchTeam } from './operations';

const extraActions = [fetchFriends, fetchTeam];

const initialState = {
  isLoading: false,
  error: null,
  friends: [],
  team: [],
};

const handleFetchTeam = (state, action) => {
  state.team = action.payload;
};

const getActionsWithType = type =>
  extraActions.map(extraAction => extraAction[type]);

const handleFetchFriendsReducer = (state, action) => {
  state.friends = action.payload;
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

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchTeam.fulfilled, handleFetchTeam)
      .addCase(fetchFriends.fulfilled, handleFetchFriendsReducer)
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
