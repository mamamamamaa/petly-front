import { lazy, useEffect, useMemo, useState } from 'react';
import { Layout } from './Layout/Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { RestrictedRoute, PrivateRoute } from '../helpers';
import { useDispatch } from 'react-redux';
import { current, refresh, googleAuth } from '../redux/auth/operations';
import { useAuth } from '../redux/hooks';
import NoticesContainer from './NoticesContainer/NoticesContainer';
import { IntlProvider} from 'react-intl';
import en from '../components/locales/en.json';
import uk from '../components/locales/uk.json'
import { useSearchParams } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));

export const App = () => {

  const [locale, setLocale] = useState('en');
  const messages = { en: en, uk: uk };
  const handleLocaleChange = (e) => {
    setLocale(e);     
  }
  
  const {
    user,
    expiresIn,
    refreshToken,
    accessToken,
    isLoggedIn
  } = useAuth();
  const [searchParams] = useSearchParams();

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

  const memoizedGoogleData = useMemo(() => {
    try {
      const memorizedSearchParams = Object.fromEntries([...searchParams]);

      if (
        memorizedSearchParams.accessToken ||
        memorizedSearchParams.refreshToken
      ) {
        const splittedFav = {
          favorite: memorizedSearchParams.favorite.split(','),
        };
        const updatedParams = { ...memorizedSearchParams, ...splittedFav };
        return updatedParams;
      }
      const userData = {
        favorite: user.favorite,
        name: user.name,
        email: user.email,
        id: user.id,
        expiresIn,
        refreshToken,
        accessToken,
        isLoggedIn,
      };
      if (isLoggedIn) {
        return userData;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }, [
    searchParams,
    // user, // if uncomment than endless rerender
    expiresIn,
    refreshToken,
    accessToken,
    isLoggedIn,
  ]);

  useEffect(() => {
    if (memoizedGoogleData) {
      dispatch(googleAuth(memoizedGoogleData));
    }
  }, [dispatch, memoizedGoogleData]);

  return (
     <IntlProvider messages={messages[locale]} locale={locale}>
    <Routes>
      <Route path="/" element={<Layout locale={locale} handleLocaleChange={handleLocaleChange}/>}>
        <Route index element={<HomePage />} />

        <Route path="/news" element={<NewsPage />} />

        <Route path="/notice" element={<NoticesPage />}>
          <Route path="sell" element={<NoticesContainer type="sell" />} />
          <Route
            path="good-hands"
            element={<NoticesContainer type="good-hands" />}
          />
          <Route path="lost" element={<NoticesContainer type="lost-found" />} />
          <Route
            path="favorite"
            element={
              <PrivateRoute
                component={<NoticesContainer type="favorite" />}
                redirectTo="/login"
              />
            }
          />
          <Route
            path="my-ads"
            element={
              <PrivateRoute
                component={<NoticesContainer type="my-ads" />}
                redirectTo="/login"
              />
            }
          />
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
    </Routes></IntlProvider>
  );
};
