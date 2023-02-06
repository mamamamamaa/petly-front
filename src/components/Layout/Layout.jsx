import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      Layout
      <header>
        <AppBar />
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
