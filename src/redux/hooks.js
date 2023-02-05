import { useSelector } from 'react-redux';

export const useAuth = () => {
  const token = useSelector(state => state.auth.token);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const error = useSelector(state => state.auth.error);

  return { token, isLoggedIn, user, isRefreshing, error };
};

export const useNews = () => {
  return;
};

export const useNotices = () => {
  return;
};

export const useFriends = () => {
  return;
};

export const useUser = () => {
  return;
};
