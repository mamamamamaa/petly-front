// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import fetchFriends from './operations';
// const extraActions = [fetchFriends];
// const getActionsWithType = type =>
//   extraActions.map(extraAction => extraAction[type]);
// const handleFetchFriendsReducer = (state, action) => {
//   state.friends = action.payload;
// };
// const anyFulfielledReducer = state => {
//   state.isLoading = false;
//   state.error = null;
// };
// const anyPendingReducer = state => {
//   state.isLoading = true;
// };
// const anyRejectedReducer = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };
// const initialState = {
//   isLoading: false,
//   error: null,
//   friends: [],
// };
// const friendsSlice = createSlice({
//   name: 'friends',
//   initialState,
//   extraReducers: builder =>
//     builder
//       .addCase(fetchFriends.fulfilled, handleFetchFriendsReducer)
//       .addMatcher(
//         isAnyOf(...getActionsWithType('fulfilled')),
//         anyFulfielledReducer
//       )
//       .addMatcher(isAnyOf(...getActionsWithType('pending')), anyPendingReducer)
//       .addMatcher(
//         isAnyOf(...getActionsWithType('rejected')),
//         anyRejectedReducer
//       ),
// });

// export const friendsReducer = friendsSlice.reducer;
// ==================
import { createSlice } from '@reduxjs/toolkit';
import fetchFriends from './operations';

const onFetchSuccessReducer = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
  state.error = null;
};
const onPendingReducer = state => {
  state.isLoading = true;
  state.error = null;
  state.items = [];
};
const onRejectedReducer = (state, action) => {
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
      .addCase(fetchFriends.fulfilled, onFetchSuccessReducer)
      .addCase(fetchFriends.pending, onPendingReducer)
      .addCase(fetchFriends.rejected, onRejectedReducer),
});

export const friendsReducer = friendsSlice.reducer;
