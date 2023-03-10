export const selectFriends = state => state.friends.friends;

export const selectIsLoading = state => state.friends.isLoading;

export const selectError = state => state.friends.error;

const friendsSelectors = {
  selectFriends,
  selectIsLoading,
  selectError,
};
export default friendsSelectors;
