export const selectTeam = state => state.friends.team;

export const selectFriends = state => state.friends.friends;

export const selectIsLoading = state => state.friends.isLoading;

export const selectError = state => state.friends.error;

const friendsSelectors = {
  selectTeam,
  selectFriends,
  selectIsLoading,
  selectError,
};
export default friendsSelectors;
