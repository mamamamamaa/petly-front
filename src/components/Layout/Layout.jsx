import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Container } from 'utils/reusable';
import NoticesPage from 'pages/NoticesPage';
export const Layout = () => {
  return (
    <Container>
      Layout
      <header>
        <AppBar />
        <NoticesPage >
          Find your favorite pet
        </NoticesPage>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
