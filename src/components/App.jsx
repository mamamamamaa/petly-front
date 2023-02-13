import { lazy, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { RestrictedRoute, PrivateRoute } from '../helpers';
import { useDispatch } from 'react-redux';
import { current, refresh } from '../redux/auth/operations';
import { useAuth } from '../redux/hooks';
import { SellList } from 'components/SellList/SellList';
import { InGoodHandsList } from 'components/InGoodHandsList/InGoodHandsList';
import { LostFoundList } from 'components/LostFoundList/LostFoundList';
import { FavoriteList } from './FavoriteList/FavoriteList';
import { MyAdsList } from './MyAdsList/MyAdsList';

const HomePage = lazy(() => import('../pages/HomePage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));

export const App = () => {
  const { expiresIn, accessToken } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  useEffect(() => {
    if (!accessToken || !expiresIn) {
      return;
    }

    const interval = setInterval(() => {
      dispatch(refresh());
    }, expiresIn);

    return () => clearInterval(interval);
  }, [dispatch, expiresIn, accessToken]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/news" element={<NewsPage />} />

        <Route path="/notice" element={<NoticesPage />}>
          <Route path="sell" element={<SellList />} />
          <Route path="good-hands" element={<InGoodHandsList />} />
          <Route path="lost" element={<LostFoundList />} />
          <Route path="favorite" element={<FavoriteList />} />
          <Route path="my-ads" element={<MyAdsList />} />
        </Route>

        <Route path="/friends" element={<OurFriendsPage />} />
        
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/user" />
          }
        />

        <Route
          path="/register"
          element={
            <RestrictedRoute component={<RegisterPage />} redirectTo="/user" />
          }
        />

        <Route
          path="/user"
          element={
            <PrivateRoute component={<UserPage />} redirectTo="/login" />
          }

        />
        
        <Route path="*" element={<Navigate to="/" replace={<HomePage />} />} />

      </Route>
    </Routes>
  );
};
