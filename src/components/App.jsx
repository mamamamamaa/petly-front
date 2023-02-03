import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute, PrivateRoute } from '../helpers';
import OurFriendsPage from '../pages/OurFriendsPage';
import HomePage from '../pages/HomePage';
import NewsPage from '../pages/NewsPage';
import LoginPage from '../pages/LoginPage';
import NoticesPage from '../pages/NoticesPage';
import RegisterPage from '../pages/RegisterPage';
import UserPage from '../pages/UserPage';
import { Layout } from './Layout/Layout';

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
