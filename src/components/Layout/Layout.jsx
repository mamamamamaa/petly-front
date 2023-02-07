import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Container } from '../../utils/reusable';

export const Layout = () => {
  return (
    <Container>
      Layout
      <header>
        <AppBar />
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
