import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Container } from '../../utils';
export const Layout = () => {
  return (
    <>
    {/* // <Container> */}
      <header>
        <AppBar />
      </header>
      <main>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </main>
    {/* // </Container> */}
    </>
  );
};
