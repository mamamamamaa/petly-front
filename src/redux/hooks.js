import { useSelector } from 'react-redux';

export const useAuth = () => {
  const token = useSelector(state => state.auth.token);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const user = useSelector(state => state.auth.user);

  return { token, isLoggedIn, isRefreshing, user };
};

export const useNews = () => {
  return;
};

export const useNotices = () => {
  return;
};

export const useServices = () => {
  return;
};

export const useUser = () => {
  return;
};
