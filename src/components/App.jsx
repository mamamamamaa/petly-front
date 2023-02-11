import { lazy, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { RestrictedRoute, PrivateRoute } from '../helpers';
import { useDispatch } from 'react-redux';
import { current, refresh } from '../redux/auth/operations';
import { useAuth } from '../redux/hooks';

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
      console.log(accessToken);
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
          <Route path="sell" element={<>Sell list</>} />
          <Route path="good-hands" element={<>In good hands list</>} />
          <Route path="lost" element={<>Lost/found list</>} />
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
            <PrivateRoute component={<UserPage />} redirectTo="/login"/>
          }
        />
        <Route path="*" element={<Navigate to="/" replace={<HomePage />} />} />
      </Route>
    </Routes>
  );
};
