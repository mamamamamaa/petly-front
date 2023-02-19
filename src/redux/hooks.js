import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

export const useAuth = () => {
  const accessToken = useSelector(state => state.auth.accessToken);
  const refreshToken = useSelector(state => state.auth.refreshToken);
  const expiresIn = useSelector(state => state.auth.expiresIn);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const verifyPart = useSelector(state => state.auth.verifyPart);
  const error = useSelector(state => state.auth.error);

  return {
    accessToken,
    refreshToken,
    isLoggedIn,
    user,
    isRefreshing,
    expiresIn,
    verifyPart,
    error,
  };
};

export const useNews = () => {
  const currentNews = useSelector(state => state.news.news);
  const isLoading = useSelector(state => state.news.isLoading);
  const error = useSelector(state => state.news.error);
  return {
    currentNews,
    isLoading,
    error,
  };
};

export const useNotices = () => {
  const currentNotice = useSelector(state => state.notices.currentNotice);
  const sellNotices = useSelector(state => state.notices.sellNotices);
  const favoriteNotices = useSelector(state => state.notices.favoriteNotices);
  const myAdsNotices = useSelector(state => state.notices.myAdsNotices);
  const lostFoundNotices = useSelector(state => state.notices.lostFoundNotices);
  const goodHandsNotices = useSelector(state => state.notices.goodHandsNotices);
  const isLoading = useSelector(state => state.notices.isLoading);
  const error = useSelector(state => state.notices.error);
  const notices = useSelector(state => state.notices.notices);
  const totalCounts = useSelector(state => state.notices.totalCounts);
  const pages = useSelector(state => state.notices.pages);
  const getFilterValue = useSelector(state => state.notices.filter);
  return {
    totalCounts,
    sellNotices,
    lostFoundNotices,
    goodHandsNotices,
    favoriteNotices,
    myAdsNotices,
    isLoading,
    error,
    currentNotice,
    notices,
    pages,
    getFilterValue
  };
};

export const useFriends = () => {
  const selectFriends = useSelector(state => state.friends.friends);

  const selectIsLoading = useSelector(state => state.friends.isLoading);

  const selectError = useSelector(state => state.friends.error);
  return {
    selectFriends,
    selectIsLoading,
    selectError,
  };
};

export const useUser = () => {
  const user = useSelector(state => state.user);

  const getUserData = useSelector(state => state.user.getUserData);
  const updateUser = useSelector(state => state.user.updateUser);

  return {
    user,
    getUserData,
    updateUser,
  };
};

export const useUserAvatar = () => {
  const userAvatar = useSelector(state => state.auth.user.avatarURL);

  return {
  userAvatar};

};

// export const useFilter = () => {
//   const getFilterValue = useSelector(state => state.notices.filter);
//   return {getFilterValue};
// }


// export const getFilterValue = state => state.notices.filter;

