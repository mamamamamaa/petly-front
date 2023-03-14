import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Container } from '../../utils';

export const Layout = ({ handleLocaleChange }) => {
  return (
    <>
    {/* // <Container> */}
      <header >
        <AppBar handleLocaleChange={handleLocaleChange}/>        
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
