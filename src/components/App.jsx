import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute, PrivateRoute } from '../helpers';
import OurFriendsPage from '../pages/OurFriendsPage';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const UserPage = lazy(() => import('../pages/UserPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
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
      </Route>
    </Routes>
  );
};
